(function() {
  'use strict';

  angular
    .module('fourNew')
    .controller('CreateEventController', CreateEventController);

  /** @ngInject */
  function CreateEventController($log, FIREBASE_URL, $location) {
    var vm = this;
    vm.submitRejected = false;

    vm.submit = function () {
      $log.log("Submitted!");
      $log.log("title: " + vm.title);

      if (vm.adminCode === "password") {
        var ref = new Firebase(FIREBASE_URL + '/');
        var newMessageRef = ref.push();
        newMessageRef.set({
          title: vm.title,
          location: vm.location,
          date: vm.date.getDate(),
          time: vm.time.getTime(),
          cost: vm.cost,
          description: vm.description,
          totalAttendees: 0
        });

        $location.path('/home')
        vm.submitRejected = false;

      } else {
        vm.submitRejected = true;
      }

    };




    // var eventDataObject = {
    //     location: vm.location,
    //     date: vm.date,
    //     time: vm.time,
    //     cost: vm.cost,
    //     description: vm.description
    // };
    //
    //
    // fredNameRef.child(vm.title).set(eventDataObject);
    // // fredNameRef.child('last').set('Flintstone');
    //
    // var onComplete = function(error) {
    //   if (error) {
    //     console.log('Synchronization failed');
    //   } else {
    //     console.log('Synchronization succeeded');
    //   }
    // };
    // fredNameRef.set({ first: 'Fred', last: 'Flintstone' }, onComplete);


  }
})();
