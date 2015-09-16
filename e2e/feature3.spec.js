'use strict';

describe('Feature 3. No catwalks, entry form', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.clear()
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should show a new catwalk form and onboarding text', function() {
    expect(page.textHow.isDisplayed()).toBeTruthy()
    expect(page.sliderLeashes.isDisplayed()).toBeTruthy()
    expect(page.selectFrequency.isDisplayed()).toBeTruthy()
    expect(page.timeNext.isDisplayed()).toBeTruthy()
    expect(page.divOnboarding.isDisplayed()).toBeTruthy()
  });

});
