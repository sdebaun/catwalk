'use strict';

describe('Feature 10. Editing a catwalk', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.loadOneFixture();
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should let me expand the row and changes are reflected in main row', function(done) {
    browser.wait(protractor.until.elementIsNotVisible(page.loadSpinner),10000);
    expect(page.rowsCatwalk.count()).toBe(1);
    var onlyRow = page.rowsCatwalk.get(0);
    onlyRow.click().then( function(){
      expect(onlyRow.element(by.css('input[name=how]')).isDisplayed()).toBeTruthy();
      onlyRow.element(by.css('input[name=how]')).sendKeys(" at first");
      return page.selectFrequency.click()
    }).then( function(){
      return page.optionHourly.click();
    }).then( function(){
      return onlyRow.click();
    }).then( function(){
      expect(page.rowsCatwalk.count()).toBe(1);
      expect(onlyRow.getText()).toContain("gently at first");
      done();
    })
  });

});
