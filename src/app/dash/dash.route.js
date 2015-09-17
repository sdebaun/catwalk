(function() {

'use strict';

angular
.module('catwalk')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('dash', {
    url: '/dash',
    templateUrl: 'app/dash/dash.html',
    controller: function($scope, $timeout, $firebaseArray, Catwalks){
      $timeout(function(){ $scope.addingCatwalk = true }) // in a timeout to make the animation trigger
      $scope.catwalks = $firebaseArray(Catwalks)
      $scope.newCatwalk = {};
      $scope.createCatwalk = function(){
        console.log("pushing catwalk",$scope.newCatwalk)
        Catwalks.push($scope.newCatwalk, function(){
          $timeout(function(){ $scope.addingCatwalk = false })
        });
      }
    }
  })
}]);

})();
