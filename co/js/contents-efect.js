$(function () {
  'use strict';

  // bodyにdivを追加
  $("body").append('<div id="curtain" role="presentation">');
  // 追加したdivを塗りつぶしてから透明化アニメーション
  $("#curtain")
    .css({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      opacity: 1,
    })
    .animate(
      {
        opacity: 0,
      },
      2000,
      function () {
        // アニメーション終了後に自身を消す
        $(this).remove();
      }
    );

  $("#GlobalNav .button").on("click", function () {
    $("#GlobalNav").toggleClass("open");
  });

  const offsetY = -10;
  const time = 500;
  $("a[href^='#']:not([href='#'])").click(function () {
    const target = $(this.hash);
    if (!target.length) return;
    const targetY = target.offset().top + offsetY;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    window.history.pushState(null, null, this.hash);
    return false;
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
  $(window).trigger('scroll');

});