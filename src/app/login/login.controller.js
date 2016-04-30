/**
 * Created by jim on 4/30/16.
 */
(function() {
  'use strict';

  angular
    .module('fourNew')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var vm = this;

    vm.signedIn = false;

  }
})();
