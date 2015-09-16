(function() {
'use strict';

angular
.module('catwalk')
.config(['$urlRouterProvider', '$mdThemingProvider', function($urlRouterProvider,$mdThemingProvider){
  $urlRouterProvider.otherwise('/');

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo', {
      default: '900'
    })
    .accentPalette('yellow', {
      default: '800',
    })
    .warnPalette('red', {
      default: 'A700'
    })
}]);

})();
