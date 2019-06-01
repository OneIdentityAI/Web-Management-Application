jQuery('.carousel-partners').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

jQuery('.carousel-services').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

jQuery('.carousel-latest-news').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  appendArrows: ".arrows-container",
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

(function($) {
  'use strict';

$(function() {
  
    function ckScrollInit(items, trigger) {
      items.each(function() {
        var ckElement = $(this),
          AnimationClass = ckElement.attr('data-animation'),
          AnimationDelay = ckElement.attr('data-animation-delay');
  
        ckElement.css({
          '-webkit-animation-delay': AnimationDelay,
          '-moz-animation-delay': AnimationDelay,
          'animation-delay': AnimationDelay
        });
  
        var ckTrigger = (trigger) ? trigger : ckElement;
  
        ckTrigger.waypoint(function() {
          ckElement.addClass("animated").css("visibility", "visible");
          ckElement.addClass('animated').addClass(AnimationClass);
        }, {
          triggerOnce: true,
          offset: '90%'
        });
      });
    }
  
    ckScrollInit($('.animation'));
    ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
  
  });
})(jQuery);