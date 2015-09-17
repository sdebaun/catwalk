'use strict';

describe('Feature 6. Adding 2d catwalk w button', function () {
  var page;

  beforeEach(function () {
    var database = require('./firebase');
    database.loadOneFixture();
    browser.get('/#/dash');
    page = require('./dash.po');
  });

  it('should let me enter and see a second catwalk', function(done) {
    browser.wait(protractor.until.elementIsNotVisible(page.loadSpinner),10000);
    expect(page.buttonAddCatwalk.isDisplayed()).toBeTruthy
    page.buttonAddCatwalk.click().then( function(){
      expect(page.divOnboarding.isDisplayed()).not.toBeTruthy();
      done();
    })
  });

});
