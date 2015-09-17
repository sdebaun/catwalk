var Firebase = require("firebase");
var fbRoot = new Firebase("https://catwalk-sample.firebaseio.com");

module.exports = {
  clear: function(){
    fbRoot.remove();
    console.log("Deleted all Firebase data");
  },

  // THIS NEEDS TO BE BLOCKING
  loadOneFixture: function(){
    fbRoot.remove();
    fbRoot.child('catwalk').push({
      frequency: 'daily',
      how: 'gently',
      leashes: 4,
      next: '5 PM',
    });
  }
  
};