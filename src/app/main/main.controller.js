(function() {
  'use strict';

  angular
    .module('fourNew')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, DatabaseManager) {
    var vm = this;

    vm.myName = "Jim";
    vm.creationDate = "today";
    vm.eventsList = DatabaseManager.pullEvents();


  }
})();
