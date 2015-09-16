'use strict';

ddescribe('Feature 5. Adding a catwalk to the list', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.clear()
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should let me save and see the data i entered', function(done) {
    expect(page.rowsCatwalk.count()).toBe(0)
    page.textHow.sendKeys("gently");
    page.textLeashes.sendKeys("4");
    page.selectFrequency.click().then( function(){
      return page.optionDaily.click();
    }).then( function(){
      return page.timeNext.sendKeys("5 PM");
    }).then( function(){
      return page.buttonSave.click();
    }).then( function(){
      expect(page.rowsCatwalk.count()).toBe(1);
      var newRow = page.rowsCatwalk.get(0);
      expect(newRow.getText()).toContain("gently");
      expect(newRow.getText()).toContain("4 Leases");
      expect(newRow.getText()).toContain("5 PM");
      expect(newRow.getText()).toContain("Daily");
      done();
    })
  });

});
