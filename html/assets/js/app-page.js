var env_data = {};(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./slick-pages');

},{"./slick-pages":2}],2:[function(require,module,exports){
"use strict";

$.prototype.slider = function (arg) {
  if (this.length === 0) return;

  var slider = function slider($block, arg) {
    var nav = $block.closest('.slider').find('.slider-nav');

    if ($block.children().length > 1) {
      if (0 !== $(nav).length) {
        arg.prevArrow = $(nav).find(".slick-prev");
        arg.nextArrow = $(nav).find(".slick-next");
      }

      $block.slick(arg);
    }
  };

  for (var i = this.length - 1; i >= 0; i--) {
    new slider($(this[i]), arg);
  }
};

var forReviewsSliderArg = {
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  arrow: true,
  dots: false,
  infinite: false,
  mobileFirst: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 3
    }
  }]
};
var forMdSliderArg = {
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  dots: false,
  infinite: false,
  responsive: [{
    breakpoint: 9999,
    settings: "unslick"
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
var forBrandsSliderArg = {
  slidesPerRow: 5,
  rows: 4,
  arrow: true,
  dots: false,
  infinite: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesPerRow: 3,
      rows: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesPerRow: 2,
      rows: 10
    }
  }]
};
$(document).ready(function () {
  $('.benefits-list').slider(forMdSliderArg);
  $('.reviews-list').slider(forReviewsSliderArg);
  $('.brands-list').slider(forBrandsSliderArg);
  $('.benefits-list, .reviews-list, .brands-list').on('afterChange', function (event, slick, currentSlide) {
    var slickNav = $(this).closest('.slider').find('.slider-nav');
    var prevNumber = $(slickNav).find('.slick-prev .number');
    var nextNumber = $(slickNav).find('.slick-next .number');
    var prevNumberText = currentSlide > 0 ? currentSlide + ' / ' : '';
    var nextNumberText = currentSlide + 2 <= slick.slideCount ? ' / ' + (currentSlide + 2) : '';
    $(prevNumber).text('').text(prevNumberText);
    $(nextNumber).text('').text(nextNumberText);
  });
  $('.fundamental-benefit-title').on('click', function (e) {
    $(this).closest('.fundamental-benefits').find('.fundamental-benefits-item').each(function (i, el) {
      $(el).find('.fundamental-benefit-info').slideUp();
    });
    $(this).next('.fundamental-benefit-info').slideDown();
  });
});
$(window).on('resize', function () {
  if (!$('.benefits-list').hasClass('slick-initialized')) {
    $('.benefits-list').slider(forMdSliderArg);
  }

  $('.reviews-list').slider(forReviewsSliderArg);
});

},{}]},{},[1]);

//# sourceMappingURL=app-page.js.map
