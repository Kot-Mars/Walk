$(document).ready(function(){
  $("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});
$(document).ready(function() {
  $('.header__humburger').click(function(event) {
    $('.header__humburger, .switch, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.menu__link').click(function(event) {
      $('.header__humburger, .switch, .menu__list').removeClass('active');
      $('body').removeClass('lock')
  });
});

