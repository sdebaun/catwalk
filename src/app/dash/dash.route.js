(function() {

'use strict';

angular
.module('catwalk')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('dash', {
    url: '/dash',
    templateUrl: 'app/dash/dash.html'
  })
}]);

})();
