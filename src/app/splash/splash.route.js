(function() {

'use strict';

angular
.module('catwalk')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('splash', {
    url: '/',
    templateUrl: 'app/splash/splash.html'
  })
}]);

})();
