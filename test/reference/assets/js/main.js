$(document).ready(function() {
  'use strict';

    // ページ読み込み後に3秒待ってから実行
    setTimeout(function () {
      $('.curtain').animate(
        { top: '-150%' }, // 上方向にアニメーション
        500,             // アニメーション時間（1秒）
        'swing',          // イージング
        function () {
          $(this).hide(); // アニメーション後に非表示にする
        }
      );
    }, 1000); // 3秒遅延

    /* PAGE TOP ボタン / fadein-up / sub-title 用 */
    const upBtn = $('#upBtn');
    console.log(upBtn);

    $(window).scroll(function() {

      const scroll = $(window).scrollTop(); // windowのスクロール位置を取得
      console.log(scroll);
      const windowHeight = $(window).height(); // windowの高さを取得

      mv_scale(scroll); // 取得したスクロール位置をmv_scaleの引数に

      if (scroll < 100) {
        upBtn.removeClass('btm-show');
      } else {
        upBtn.addClass('btm-show');
      }

      const animTrigger = $('.anim'); // クラス名animがある要素を取得
      animTrigger.each(function(){  // animTriggerに対して以下のような繰り返し処理を行う
        const elemTop = $(this).offset().top; // animTriggerの位置を取得
        
        if (scroll > elemTop - windowHeight + 200){ // animTriggerの取得からwindowの高さを取得をひいて200pxを足した値がwindowのスクロール位置より小さい場合
          $(this).addClass('is-animated'); // animTriggerにクラス名is-animatedを追加
        } 
      });

      const fadeTrigger = $(".fadein-up");
      fadeTrigger.each(function () {
        const elemPos = $(this).offset().top;
        // const windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200) {
          $(this).addClass("scrollin");
        }
      });

    });
    $(window).trigger('scroll'); // 初期化時にスクロールイベントを発火

    upBtn.click(function(){
      $('body, html').animate({ scrollTop: 0 }, 0);
      return false;
    });
    /* PAGE TOP ボタン / fadein-up / sub-title 用 */


    // スクロール量に応じてimgの良いきさを決める関数
    function mv_scale(scroll) {
      // $(window).width()で画面幅を取得
      // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
      if ($(window).width() > 900) {
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
        $('#mainVisual img').css({
          'width': 30 + (30/3 + scroll/10) + '%'
        });
      // スマホ表示の場合の処理（画面幅が900px以下の場合）
      } else {
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
        $('#mainVisual img').css({
          'width': 30 - scroll/10  + '%'
        });
      }
    };

    /* SLIDER */
    $('.slider_01').slick({
      autoplay: true, // 自動でスクロール
      autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
      speed: 5000, // スライドが流れる速度を設定
      cssEase: "linear", // スライドの流れ方を等速に設定
      slidesToShow: 4, // 表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, // 矢印非表示
      pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
      variableWidth: true,
      responsive: [
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 4, // 画面幅750px以下でスライド3枚表示
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
          }
        },
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 2, // 画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });

    $('.slider_02').slick({
      autoplay: true, // 自動でスクロール
      autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
      speed: 5000, // スライドが流れる速度を設定
      cssEase: "linear", // スライドの流れ方を等速に設定
      slidesToShow: 4, // 表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, // 矢印非表示
      pauseOnFocus: true, // スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: true, // スライダーにマウスホバーした時にスライドを停止させるか
      variableWidth: true,
      rtl: true, // 右から左ではなく左から右に動作させる

      responsive: [
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 4, // 画面幅750px以下でスライド3枚表示
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
          }
        },
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 2, // 画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
    /* SLIDER */
});


// memo
// $(document).ready(function() {
//   の中に書く場合、ページ読み込み時に実行されるため、
//   $(".fadein-up").css("visibility", "hidden");
//   インラインスタイルとして設定され、HTMLの要素に直接記述される状態になる。
// });

// $(".fadein-up").css("visibility", "hidden");
// 外にこのコードを置いた場合、JavaScriptの実行タイミングが異なるため、スタイルが直接HTMLに書き込まれない可能性がある。

// $(window).scroll(function () {
// ウィンドウをスクロールした時に実行する。
// });