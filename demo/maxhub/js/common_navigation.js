(function(){
  $('.header-menu').load('https://sup.iti-inc.co.jp/maxhub-test/maxhub-top/js/common_navi/siteHeder.html');
  $('footer').load('https://sup.iti-inc.co.jp/maxhub-test/maxhub-top/js/common_navi/siteFooter.html');
})();

// $(function () {
//   function handleNav() {
//     if (window.matchMedia("(min-width: 1025px)").matches) {
//       // 1025px以上の場合
//       $("#GlobalNav .button").off("click").on("click", function () {
//         $("#GlobalNav").toggleClass("open");
//         $("body").toggleClass("fixed");
//       });

//       $("li a[data-close]").off("click").on("click", function () {
//         $("#GlobalNav").removeClass("open");
//         $("body").removeClass("fixed");
//       });
//     } else {
//       // 1024px以下の場合
//       $("#GlobalNav").off("click").on("click", ".button, li a[data-close]", function () {
//         $("#GlobalNav").toggleClass("open");
//         $("body").toggleClass("fixed");
//       });
//     }
//   }

//   // 初回実行
//   handleNav();

//   // 画面リサイズ時にも実行
//   $(window).on("resize", function () {
//     handleNav();
//   });
// });


$(function () {
  $("#GlobalNav .button").off("click").on("click", function () {
    $("#GlobalNav").toggleClass("open");
    $("body").toggleClass("fixed");
  });

  $("li a[data-close]").off("click").on("click", function () {
    $("#GlobalNav").removeClass("open");
    $("body").removeClass("fixed");
  });
});

// $(function () {
//   $("#GlobalNav").on("click", ".button, li a[data-close]", function () {
//     $("#GlobalNav").toggleClass("open");
//     $("body").toggleClass("fixed");
//   });
// });