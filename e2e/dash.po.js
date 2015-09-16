'use strict';

var DashPage = function() {
  this.textHow = element(by.css('input[name=how]'))
  this.sliderLeashes = element(by.css('input[name=leashes]'))
  this.selectFrequency = element(by.css('md-select[name=frequency]'))
  this.timeNext = element(by.css('input[name=next]'))
  this.divOnboarding = element(by.css('div.onboarding'))
};

module.exports = new DashPage();
