var env_data = {};(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//require('./webp');
function showTextInMob() {
  if ($(window).width() < 768) {
    if (0 !== $('.show-text-in-mob').length) {
      $('.show-text-in-mob').each(function (i, el) {
        var text = $(el).data('text');
        if (text) $(el).text(text);
      });
    }
  } else {
    if (0 !== $('.show-text-in-mob').length) {
      $('.show-text-in-mob').each(function (i, el) {
        $(el).text("");
      });
    }
  }
}

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 1) {
    $('.block-header').addClass('sticky');
  } else {
    $('.block-header').removeClass('sticky');
  }
});
$(document).ready(function () {
  $('.video .play-btn').on('click', function (e) {
    e.preventDefault();
    $(this).hide().closest('.video').find('video').trigger('play');
  });
  $('.slider-design-for .video .video-inner video').on('click', function (e) {
    e.preventDefault();
    var slidePlayBtn = $(this).closest('.video').find('.play-btn');
    $(this).trigger('pause');
    $(slidePlayBtn).show();
  });
  showTextInMob();
  $(window).resize(function () {
    showTextInMob();
  });
});

require('./slick');

require('./modals');
/*
require('./tabs');
require('./accordion');
require('./forms');
require('./select');
require('./lazyloader');
require('./url_params');
require('./sidebar');
require('./travel_policy_builder');
require('./language');
require('./menu');
require('./links');
 */

},{"./modals":2,"./slick":3}],2:[function(require,module,exports){
"use strict";

$('.modal-btn').on('click', function () {
  event.preventDefault();
  var attr = $(this).attr('data-modal');
  $('body').addClass('open-modal').find('#' + attr).addClass('show');
});
$('.modal .modal-overlay, .modal .close').on('click', function () {
  event.preventDefault();
  $(this).closest('.modal').removeClass('show');
  $('body').removeClass('open-modal');
});

var addEvent = function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
};

addEvent(document, "mouseout", function (event) {
  event = event ? event : window.event;
  var from = event.relatedTarget || event.toElement;

  if ((!from || from.nodeName == "HTML") && event.clientY <= 100) {
    $('body').addClass('open-modal').find('#exit').addClass('show');
  }
});

},{}],3:[function(require,module,exports){
"use strict";

$.prototype.slider = function (arg) {
  if (this.length === 0) return;

  var slider = function slider($block, arg) {
    var nav = $block.closest('.block').find('.slider-nav');

    if ($block.children().length > 1) {
      if (0 !== $(nav).length && !$block.hasClass('slider-design-for')) {
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
var forSmSliderArg = {
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
    breakpoint: 525,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
var designBlastDesignForArg = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  asNavFor: '.design-blast .slider-design-nav',
  responsive: [{
    breakpoint: 768,
    settings: {
      infinite: false,
      arrows: false
    }
  }]
};
var designBlastDesignNavArg = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  infinite: true,
  cssEase: 'none',
  speed: 0,
  asNavFor: '.design-blast .slider-design-for',
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: true,
      infinite: false
    }
  }]
};
$(document).ready(function () {
  $('.structure .info').slider(forMdSliderArg);
  $('.about .info-gallery').slider(forSmSliderArg);
  $('.design-blast .slider-design-for').slider(designBlastDesignForArg);
  $('.design-blast .slider-design-nav').slider(designBlastDesignNavArg);
  $('.design-blast .slider-design-nav').on('afterChange', function (event, slick, currentSlide) {
    var slickNav = $(this).closest('.slider').find('.slider-nav');
    var prevNumber = $(slickNav).find('.slick-prev .number');
    var nextNumber = $(slickNav).find('.slick-next .number');
    $(prevNumber).text('').text(currentSlide + ' / ');
    $(nextNumber).text('').text(' / ' + (currentSlide + 2));
  });
  $('.design-blast .slider-design-for').on('beforeChange', function (event, slick, currentSlide) {
    var slide = $(slick.$slides[currentSlide]);
    var slideVideo = $(slide).find('video').trigger('pause');
    var slidePlayBtn = $(slide).find('.play-btn');

    if (0 !== $(slideVideo).length) {
      $(slideVideo).trigger('pause');
    }

    if (0 !== $(slidePlayBtn).length) {
      $(slidePlayBtn).show();
    }
  });
});
$(window).on('resize', function () {
  if (!$('.structure .info').hasClass('slick-initialized')) {
    $('.structure .info').slider(forMdSliderArg);
  }

  if (!$('.about .info-gallery').hasClass('slick-initialized')) {
    $('.about .info-gallery').slider(forSmSliderArg);
  }
});

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
