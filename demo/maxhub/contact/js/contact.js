$(function(){
    var notRequiredList = [
        'position_department',
        'first-datepicker-input',
        'second-datepicker-input',
        'third-datepicker-input',
        'first-time-input',
        'second-time-input',
        'third-time-input'
    ];
    var dateTimeItem = [
        'first-datepicker-input',
        'second-datepicker-input',
        'third-datepicker-input',
        'first-time-input',
        'second-time-input',
        'third-time-input'
    ];
    var submitDataList = [];

    // お問い合わせ項目で「デモンストレーション予約」を選択した時に第一希望日を必須項目にする
    $('#inquiry_selector').on('change', function () {
        var notRequiredListIndex = notRequiredList.indexOf('first-datepicker-input');
        if ($('#inquiry_selector option:selected').val() === '1') {
            // value1にデモンストレーション予約が入っているため変更したらこちらも修正する
            $('label[for="first-datepicker-input"]').append('<span>必須</span>');
            if (notRequiredListIndex !== -1) {
                notRequiredList.splice(notRequiredListIndex, 1);
            }
            $('.form_blockWrap.date_data').show();
        } else {
            $('label[for="first-datepicker-input"] > span').remove();
            if (notRequiredListIndex === -1) {
                notRequiredList.push('first-datepicker-input');
            }
            $('.form_blockWrap.date_data').hide();
        }
    });

    // プライバシーポリシーのチェック時のみボタンを有効化
    $('#confirmation').change(function(){
        if ($(this).prop('checked')) {
            $(".correct-btn").prop("disabled", false);
            $(".correct-btn").css('background-color','var(--base_color3)');
        } else {
            $(".correct-btn").prop("disabled", true);
            $(".correct-btn").css('background-color','var(--base_color5)');
        }
    });

    // バリデーションおよびモーダルの表示を行う
    $('.correct-btn').click(function(){
        // エラーメッセージをリセット
        $('#contactForm').find('p.text-danger').text('');
        var errFlg = false;

        // 入力内容を取得しバリデーションを行う
        var formData = $('#contactForm').serializeArray();
        var dateSelect = $('#inquiry_selector option:selected').val();
		$.each(formData, function(i, element) {
            if (notRequiredList.indexOf(element.name) !== -1 && element.value == '') {
                // 任意項目かつ空である場合は入力内容を取得しない
                return true;
            } else if (element.name === 'confirmation') {
                // プライバシーポリシーは確認内容に含めない
                return true;
            } else if (dateSelect !== '1' && dateTimeItem.indexOf(element.name) !== -1) {
                // デモンストレーション予約以外は日付項目を入力内容に取得しない
                return true;
            }
            var label = getLabelText($('label[for="' + element.name + '"]'));
            var inputValue = element.value;
            // リストの取得のみ別ロジック
            if (element.name === 'inquiry_selector') {
                inputValue = $('#inquiry_selector option:selected').text();
            }

            // バリデーションチェックを実施
            var error = validateForm(element.name, label, element.value);
            if (error != '') {
                $('p#' + element.name + '_error').text(error);
                errFlg = true;
            } else {
                submitDataList.push([label, inputValue]);
                // 日付関連の表示を整理する
                if (element.name.indexOf('datepicker-input') > -1) {
                    // 希望日の表示
                    var index = element.name.split('-')[0];
                    if (index.indexOf('first') === 0) {
                        // 第一希望日が必須かつ先頭のため、このタイミングで出力箇所を作成
                        makeDateFormInPopup();
                    }
                    $('.candidate.' + index + ' > .date').text(label + ' ' + inputValue);
                } else if (element.name.indexOf('time-input') > -1) {
                    // 希望時間の表示
                    var index = element.name.split('-')[0];
                    $('.candidate.' + index + ' > .time').text(label + ' ' + inputValue);
                } else {
                    // その他項目の表示
                    $('.popup-content_detail').append('<div class="part"><h2>' + label + '</h2><p>' + inputValue + '</p></div>');
                }
            }
		});
        // プライバシーポリシーの確認を行う
        if ($('#confirmation').prop("checked") === false) {
            $('p#confirmation_error').text('プライバシーポリシーへの同意をお願いします。');
            errFlg = true;
        }
        if (!errFlg) {
            openPopup(".popup");
        } else {
            $('.popup-content_detail').empty();
            submitDataList.splice(0);
            alert('入力内容に誤りがあります。\nご確認の上再度「確認する」ボタンを押下してください。');
        }
    })

    // フォームの送信を行う
    $("#close-completed").on("click", function() {
        // 多重送信抑制
        $("#close-completed").prop("disabled", true);
        $("#close-completed").css('background-color','var(--base_color5)');
        $("#close-completed").text("送信中");
        $.ajax({
            url:'../../api/InquirySender.php',
            type:'POST',
            data:{
                'data':submitDataList,
                'from':'product'
            }
        })
        // 成功時
        .done( (data) => {
            moveThanksPage();
        })
        // 失敗時
        .fail( (jqXHR, textStatus, errorThrown) => {
            alert('お問い合せ内容の送信に失敗しました。\nお手数おかけしますがページ再読み込みの上再送信をお願いします。');
            $("#close-completed").prop("disabled", false);
            $("#close-completed").css('background-color','var(--base_color3)');
            $("#close-completed").text("送信する");
            $('.popup-content_detail').empty();
            submitDataList.splice(0);
            closePopup(".popup");
        });
    })

    // フォームを閉じた際にポップアップ内をリセット
    $('#confirmationScreen').on('hidden.bs.modal', function () {
        $('.popup-content_detail').empty();
        submitDataList.splice(0);
    })

    // 送信確認画面の日付箇所を作成
    function makeDateFormInPopup() {
        $('.popup-content_detail').append('<div class="part"><h2>デモンストレーション希望日</h2></div>');
        $('.popup-content_detail > div').last().append('<div class="candidate first"><div class="date"></div><div class="time"></div></div>');
        $('.popup-content_detail > div').last().append('<div class="candidate second"><div class="date"></div><div class="time"></div></div>');
        $('.popup-content_detail > div').last().append('<div class="candidate third"><div class="date"></div><div class="time"></div></div>');
    }

    // ラベルから項目名を取得する
    function getLabelText(selector){
        var label = $(selector[0].outerHTML);
        label.children().empty();
        return label.text().trim();
    }

    // 項目に応じてバリデーションチェックを行う
    function validateForm(name, label, value) {
        var errMsg = '';
        // 必須入力チェック
        if (notRequiredList.indexOf(name) === -1) {
            // 必須項目が空であれば以降のバリデーションは行わない
            if (name === 'inquiry_selector') {
                if (value == '') {
                    errMsg += 'お問い合わせ項目を選択してください';
                }
                return errMsg;
            } else if (value == '') {
                errMsg += label + 'を入力してください';
                return errMsg;
            }
        }
        // ひらがなチェック
        if (name === 'name_furigana') {
            regex = /^[\p{scx=Hiragana} 　]+$/u;
            if (value.match(regex) === null){
                errMsg += 'ひらがな以外の文字が含まれています\n';
            }
        }

        // 電話番号チェック
        if (name === 'telnumber') {
            regex = /^0\d{9,10}$/;
            if (value.match(regex) === null){
                errMsg += 'ハイフン無しの形式で電話番号を入力してください\n';
            }
        }

        // メールアドレスチェック
        if (name === 'email') {
            regex = /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i;
            if (value.match(regex) === null){
                errMsg += '正しい形式でメールアドレスを入力してください\n';
            }
        }

        // 日付形式チェック
        if (name.indexOf('datepicker-input') > -1) {
            regex = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/;
            if (value.match(regex) === null){
                errMsg += '正しい形式で日付を入力してください\n';
            }
        }
        return errMsg;
    }

    // サンクスページに遷移する
    function moveThanksPage() {
        // GTMのために識別用メールアドレスをpostする
        var gtmMail = $('input[name="email"]').val();
        var $fm = $('<form />', {
            method: 'post',
            action: 'thanks/index.php',
        });
        $fm.append($('<input />', {
            type: 'hidden',
            name: 'gtmMail',
            value: gtmMail,
        }));
        $fm.appendTo(document.body);
        $fm.submit();
        $fm.remove();
    }

    // ポップアップを閉じた時に要素を空にする
    $("#close-01, #close-correct").on("click", function() {
        $('.popup-content_detail').empty();
        submitDataList.splice(0);
        closePopup(".popup");
    });

});

