'use strict';

describe('Feature 4. New catwalk, fields', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.clear()
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should make me enter data before i can save', function(done) {
    expect(page.buttonSave.isDisplayed()).not.toBeTruthy();
    page.textHow.sendKeys("gently");
    page.textLeashes.sendKeys("4");
    page.selectFrequency.click().then( function(){
      return page.optionDaily.click();
    }).then( function(){
      return page.timeNext.sendKeys("5 PM");
    }).then( function(){
      expect(page.buttonSave.isDisplayed()).toBeTruthy();
      done();
    })
  });

});
