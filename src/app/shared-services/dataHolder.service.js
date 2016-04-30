/**
 * Created by jim on 4/30/16.
 */
(function() {
  'use strict';

  angular
    .module('fourNew')
    .service('DataHolder', DataHolder);

  /** @ngInject */
  function DataHolder() {
    var vm = this;
    
    vm.signedIn = false;

  }
})();
