(function() {
  'use strict';

  angular
    .module('catwalk')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
