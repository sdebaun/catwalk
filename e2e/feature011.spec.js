'use strict';

describe('Feature 11. Deleting a catwalk', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.loadOneFixture();
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should let me expand the row and delete it', function(done) {
    browser.wait(protractor.until.elementIsNotVisible(page.loadSpinner),10000);
    expect(page.rowsCatwalk.count()).toBe(1);
    var onlyRow = page.rowsCatwalk.get(0);
    onlyRow.click().then( function(){
      return onlyRow.element(by.css("button.delete")).click();
    }).then( function(){
      expect(page.rowsCatwalk.count()).toBe(0);
      done();
    })
  });

});
