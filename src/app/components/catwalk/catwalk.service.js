(function() {
'use strict';

angular
.module('catwalk')
.service('Catwalks', ['firebaseRoot', function(firebaseRoot){
  return firebaseRoot.child("catwalk");
}])

})();
