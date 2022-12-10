$(function () {
  $("#GlobalNav .button").on("click", function () {
    $("#GlobalNav").toggleClass("open");
  });
});
$(function () {
  // bodyにdivを追加
  $("body").append('<div id="curtain">');
  // 追加したdivを塗りつぶしてから透明化アニメーション
  $("#curtain")
    .css({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      opacity: 100,
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
});
$(".fadein").css("visibility", "hidden");
$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200) {
      $(this).addClass("scrollin");
    }
  });
});
$(function () {
  var offsetY = -10;
  var time = 500;
  $("a[href^=#]").click(function () {
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top + offsetY;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    window.history.pushState(null, null, this.hash);
    return false;
  });
});
