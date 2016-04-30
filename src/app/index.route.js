(function() {
  'use strict';

  angular
    .module('fourNew')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('createEvent', {
        url: '/create-event',
        templateUrl: 'app/create-event/createEvent.html',
        controller: 'CreateEventController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
