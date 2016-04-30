(function() {
  'use strict';

  angular
    .module('fourNew')
    .service('DatabaseManager', DatabaseManager);

  /** @ngInject */
  function DatabaseManager($log, $firebaseArray, FIREBASE_URL) {
    var vm = this;


    $log.log("DatabaseManager was created!");

    vm.pullEvents = function () {
      var ref = new Firebase(FIREBASE_URL);
      var events = $firebaseArray(ref);

      return events;
    }

  }
})();
