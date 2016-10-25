(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/coffee', {
        templateUrl: 'js/components/coffee/coffee.view.html',
        controller: 'coffeeController',
        controllerAs: 'coffeeCtrl'
      })
      .when('/user', {
        templateUrl: 'js/components/user/user.view.html',
        controller: 'userController',
        controllerAs: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/coffee'
      });
  }

})();
