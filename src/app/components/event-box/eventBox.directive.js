(function() {
  'use strict';

  angular
    .module('fourNew')
    .directive('eventBox', eventBox);

  /** @ngInject */
  function eventBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/event-box/eventBox.html',
      scope: {
        myName:'=',
        eventObj:'='
      },
      controller: EventBoxController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EventBoxController($log, $scope) {
      var vm = this;

      vm.isJoined = false;
      $log.log("creation date: " + JSON.stringify(vm.eventObj));
      $log.log("got the event obj! " + vm.myName);

      vm.onJoinClick = function() {
        $log.log("Joined!");
        vm.isJoined = true;
        vm.eventObj.totalAttendees++;
        // vm.isJoined = true;
        // $scope.$apply;
      };

      vm.onCancelClick = function () {
        $log.log("Cancelled!");
        vm.eventObj.totalAttendees--;
        vm.isJoined = false;
      };



      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
