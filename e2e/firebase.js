var Firebase = require("firebase");
var fbRoot = new Firebase("https://catwalk-sample.firebaseio.com");

module.exports = {
  clear: function(){
    fbRoot.remove();
    console.log("Deleted all Firebase data");
  }
};