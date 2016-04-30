(function() {
  'use strict';

  angular
    .module('hillaryHackathon')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
