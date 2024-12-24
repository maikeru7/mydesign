$('#js-slider-2').slick({
  arrows: true,
  dots: true,
  appendDots: $('.dots-2'),
  speed: 1000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  // infinite: true,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
});

$(function(){
  $('.js-accordion_title').click(function(){ 
    $(this).next('.js-accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});

$(function() {
    let datePickerInputs = $('#first-datepicker-input, #second-datepicker-input, #third-datepicker-input');
    let calendarIcons = $('#first-calendar-icon, #second-calendar-icon, #third-calendar-icon');

    datePickerInputs.datepicker();

    calendarIcons.click(function() {

        let index = calendarIcons.index(this);
        datePickerInputs.eq(index).datepicker("show");
    });
  $.datepicker.regional['ja'] = {
    closeText: '閉じる',
    prevText: '<前',
    nextText: '次>',
    currentText: '今日',
    monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    dayNamesMin: ['日','月','火','水','木','金','土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    minDate: "+1d",
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'};
  $.datepicker.setDefaults($.datepicker.regional['ja']);

});

function openPopup(popupClass) {
  $(popupClass).addClass("show-popup").fadeIn();
}
function closePopup(popupClass) {
  $(popupClass).removeClass("show-popup").fadeOut();
}