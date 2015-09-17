(function() {

'use strict';

angular
.module('catwalk')
.directive('catwalkFields', function(){
  return {
    restrict: 'E',
    scope: {
      catwalk: '='
    },
    templateUrl: 'app/components/catwalk/catwalk.fields.directive.html'
  }
})

})();
