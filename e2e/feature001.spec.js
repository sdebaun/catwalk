'use strict';

describe('Feature 1. Opening app for first time', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.clear();
    browser.get('/');
    page = require('./splash.po');
  });

  it('should show a start button', function() {
    expect(page.buttonStart.isDisplayed()).toBeTruthy();
  });

});
