document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';

  var handleScrollHomepage = window.util.debounce(function (event) {
    if (window.pageYOffset > 0) {
      $('.main-header').addClass('main-header--filled');
    } else {
      $('.main-header').removeClass('main-header--filled');
    }
  }, 100);

  if ($('.homepage').length) {
    $('.main-header').removeClass('main-header--filled');

    $(window).on('scroll', handleScrollHomepage);
  }

  new WOW({
    offset: 100
  }).init();

  $('.portfolio__list').imagesLoaded(function () {
    $('.js-portfolio-grid').isotope({
      itemSelector: '.portfolio__item',
      layoutMode: 'masonry',
      percentPosition: true,
    });
  });

  $('.js-clients-slider').owlCarousel({
    items: 6,
    margin: 10,
    dots: false,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 6
      }
    }
  });

  $('.js-testimonials-tabs').tabslet();

  if (window.matchMedia("(min-width: 1024px)").matches) {
    $('.js-testimonials-tabs').tabslet({
      mouseevent: 'hover',
    });
  }
});
