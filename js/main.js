$(document).ready(function () {

  // аккордеон
  $('.accordion__question').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
    $('.accordion__question').not(this).parent().removeClass('active');
    $('.accordion__question').not(this).next().slideUp();
  });
});