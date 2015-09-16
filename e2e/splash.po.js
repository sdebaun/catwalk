'use strict';

var SplashPage = function() {
  this.buttonStart = element(by.css('.start'));
  this.buttonRestart = element(by.css('.restart'));
};

module.exports = new SplashPage();
