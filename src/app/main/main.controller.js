(function() {
  'use strict';

  angular
    .module('fourNew')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, DatabaseManager, $log) {
    var vm = this;

    vm.myName = "Jim";
    vm.creationDate = "today";
    vm.eventsList = DatabaseManager.pullEvents();

    $timeout(function() {
      var retrievedObject = localStorage.getItem('username');

      console.log('typeof retrievedObject: ' + typeof retrievedObject);
      console.log('typeof retrievedObject: ' + retrievedObject);

      if (retrievedObject) {
        vm.signedIn = true;
        vm.username = retrievedObject;
      }

    });


    vm.onLoginClick = function() {

      if (vm.tempUsername != '') {
        $log.log("username: " + vm.tempUsername);
        vm.username = vm.tempUsername;
        vm.tempUsername = '';
        vm.signedIn = true;

        localStorage.setItem('username', vm.username);

      }

    };

    vm.onLogoutClick = function() {
      vm.signedIn = false;
      localStorage.removeItem('username');

    }
  }
})();
