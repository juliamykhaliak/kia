$(document).ready(function(){
  const $owl = $(".owl-carousel");
  $owl.owlCarousel({
    items:1,
    loop:true,
    nav: false,
    animateIn:'slideInDown',
    animateOut: 'slideOutUp',
    dots: true,
    dotsSpeed: 2000,
    smartSpeed: 1200,
    autoplayTimeout: 1520,
  });
  
  $owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      $(this).trigger('next.owl');
    } else {
      $(this).trigger('prev.owl');
    }
    e.preventDefault();
  });

  let offsetCarBlock = $('#moving-out-car-section').offset().top;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= (offsetCarBlock - 500)) {
      $('.car-pop').addClass('pop-out-car');
    }
  });

  $('.block-menu-popping').on('click', function () {
    $('.show-dropdown').toggleClass('unactive-dropdown-menu-stonic');
    $('.show-dropdown').toggleClass('active-dropdown-menu-stonic');
  });

  $('.unactive-button-progress-bar').mouseover(function () {
    $('.info-progress').toggleClass('unactive');
    $('.info-progress').toggleClass('active-button-progress-bar');
  });
});

