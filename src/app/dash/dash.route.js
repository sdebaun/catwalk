(function() {

'use strict';

angular
.module('catwalk')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('dash', {
    url: '/dash',
    templateUrl: 'app/dash/dash.html',
    controller: function($scope, $timeout){
      $timeout(function(){ $scope.addingCatwalk = 1 }) // in a timeout to make the animation trigger
    }
  })
}]);

})();
