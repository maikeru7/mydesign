$(function(){
  $(window).scroll(function() {
    let scroll = $(window).scrollTop(); // スクロール位置を取得
    mv_scale(scroll); // 取得したスクロール位置をmv_scaleの引数に
  });
});

// スクロール量に応じてimgの良いきさを決める関数
function mv_scale(scroll) {
  // window.innerWidthで画面幅を取得
  // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
  if (window.innerWidth > 900) {
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

/* PAGE TOP ボタン */
let upBtn = $('#upBtn');
console.log(upBtn);

$(window).on('scroll', function() {
  let scrollTop = $(window).scrollTop();
  console.log(scrollTop);

  if (scrollTop < 100) {
    $(upBtn).removeClass('btm-show');
  }
  if (scrollTop >= 100) {
    $(upBtn).addClass('btm-show');
  }
});
/* PAGE TOP ボタン */