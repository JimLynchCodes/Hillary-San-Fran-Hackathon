(function() {
  'use strict';

  angular
    .module('fourNew')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
