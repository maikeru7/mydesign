
$(document).ready(function() {
  const mediaQuery = window.matchMedia("(max-width: 932px)");
  function handleMediaQueryChange(e) {
    if (e.matches) {
      $('#followButton').addClass('show');

      $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        let firstSectionTop = $('#firstSection').offset().top;
        let formTop = $('#form').offset().top;
        let windowHeight = $(window).height();

        if (scrollTop >= firstSectionTop - windowHeight + 667) {
          $('header').addClass('show');
        } else {
          $('header').removeClass('show');
        }

        if (scrollTop >= formTop - windowHeight + 200) {
          $('#followButton').removeClass('show');
        } else {
          $('#followButton').addClass('show');
        }
      });

    } else {
      $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        let firstSectionTop = $('#firstSection').offset().top;
        let formTop = $('#form').offset().top;
        let windowHeight = $(window).height();

        if (scrollTop >= firstSectionTop - windowHeight + 600) {
          $('header').addClass('show');
          $('#followButton').addClass('show');
        } else {
          $('header').removeClass('show');
          $('#followButton').removeClass('show');
        }

        if (scrollTop >= formTop - windowHeight + 200) {
          $('#followButton').removeClass('show');
        }
      });
    }
  }
  mediaQuery.addListener(handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);
});

function delayScrollAnime() {
    let time = 0.2;
    let value = time;
    if ($(window).width() >= 668) {
        $('.delayScroll').each(function () {
            let parent = this;
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            let childs = $(this).children();

            if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
                $(childs).each(function () {

                    if (!$(this).hasClass("fadeUp")) {

                        $(parent).addClass("play");
                        $(this).css("animation-delay", value + "s");
                        $(this).addClass("fadeUp");
                        value = value + time;
                        let index = $(childs).index(this);
                        if ((childs.length - 1) == index) {
                            $(parent).removeClass("play");
                        }
                    }
                })
            }
        })
    }
}

$(window).scroll(function () {
    delayScrollAnime();
});

if ($(window).width() <= 667) {
    $(".fadein-sp").css("visibility", "hidden");
    $(window).scroll(function () {
        $(".fadein-sp").each(function () {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                $(this).addClass("scrollin");
            }
        });
    });
}

$(".fadein").css("visibility", "hidden");
$(window).scroll(function () {
  $(".fadein").each(function () {
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 0) {
      $(this).addClass("scrollin");
    }
  });
});

$(window).scroll(function () {
    if ($(window).width() <= 540) {
        $(".fadeDown").each(function () {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 1800) {
                $(this).addClass("scrollin-Down");
            }
        });
    }
    else if ($(window).width() >= 541) {
        // $(".fadeDown").css("visibility", "hidden");
        $(".fadeDown").each(function () {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 600) {
                $(this).addClass("scrollin-Down");
            }
        });
    }
});