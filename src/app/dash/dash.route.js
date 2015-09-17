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
      $scope.newCatwalk = {};

      $scope.catwalks = $firebaseArray(Catwalks)
      $scope.catwalks.$loaded().then(function(){
        $scope.catwalksLoaded = true
        $scope.$watch('catwalks.length', function(){
          if ($scope.catwalks.length==0) { $scope.addingCatwalk = true }
        });
      });

      $scope.createCatwalk = function(){
        console.log("pushing catwalk",$scope.newCatwalk)
        Catwalks.push($scope.newCatwalk, function(){
          $timeout(function(){ $scope.addingCatwalk = false })
          $scope.newCatwalk={}
        });
      }

      $scope.delete = function(catwalk){
        console.log("deleting catwalk",catwalk.$id);
        Catwalks.child(catwalk.$id).remove();
      }
    }
  })
}]);

})();
