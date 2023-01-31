var env_data = {};(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('./slick-home');

},{"./slick-home":2}],2:[function(require,module,exports){
"use strict";

var forHomeSliderArg = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  fade: true,
  asNavFor: '.ok_home-slider-nav',
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500
};
var forHomeSliderNavArg = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.ok_home-slider',
  dots: false,
  arrows: false,
  rows: 0,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      centerMode: true,
      centerPadding: '35%',
      slidesToShow: 1
    }
  }]
};
$(document).ready(function () {
  $('.ok_home-slider').slick(forHomeSliderArg);
  $('.ok_home-slider-nav').slick(forHomeSliderNavArg);
});

},{}]},{},[1]);

//# sourceMappingURL=app-home.js.map
