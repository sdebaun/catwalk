'use strict';

var DashPage = function() {
  this.textHow = element(by.css('input[name=how]'))
  this.sliderLeashes = element(by.css('md-slider.leashes'))
  this.textLeashes = element(by.css('input[name=leashes]'))

  this.selectFrequency = element(by.css('md-select[name=frequency]'))
  this.optionDaily = element(by.css('md-option.daily'))

  this.timeNext = element(by.css('input[name=next]'))
  this.divOnboarding = element(by.css('div.onboarding'))

  this.buttonSave = element(by.css('button.save'))
};

module.exports = new DashPage();
