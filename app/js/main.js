$(function () {
  $('.message__btn').on('click', function (e) {
    e.preventDefault;
    $('.message').toggleClass('none');
  });


  $('.menu__button').on('click', function (e) {
    e.preventDefault;
    $('.menu__list').toggleClass('active');
    $('.menu__button').toggleClass('active');
    $('body').toggleClass('lock');
  });
})