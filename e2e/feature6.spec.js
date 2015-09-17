'use strict';

ddescribe('Feature 6. Adding 2d catwalk', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.loadOneFixture();
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should let me enter and see a second catwalk', function(done) {
    browser.wait(protractor.until.elementIsNotVisible(page.loadSpinner),10000);
    expect(page.rowsCatwalk.count()).toBe(1);
    page.buttonAddCatwalk.click().then( function(){
      page.textHow.sendKeys("to the pub");
      page.textLeashes.sendKeys("2");
      return page.selectFrequency.click()
    }).then( function(){
      return page.optionHourly.click();
    }).then( function(){
      return page.timeNext.sendKeys("6 PM");
    }).then( function(){
      return page.buttonSave.click();
    }).then( function(){
      expect(page.rowsCatwalk.count()).toBe(2);
      var newRow = page.rowsCatwalk.get(1);
      expect(newRow.getText()).toContain("to the pub");
      expect(newRow.getText()).toContain("2 Leashes");
      expect(newRow.getText()).toContain("6 PM");
      expect(newRow.getText()).toContain("Hourly");
      done();
    })
  });

});
