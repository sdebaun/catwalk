'use strict';

describe('Feature 1. Opening app for first time', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./splash.po');
    var database = require('./firebase');
    database.clear()
  });

  it('should show a start button', function() {
    expect(page.buttonStart.isDisplayed()).toBeTruthy()
  });

});
