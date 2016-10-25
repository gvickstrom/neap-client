(function() {

  'use strict';

  angular
    .module('myApp.components.user', [])
    .controller('userController', userController);

  userController.$inject = ['$scope', 'userService'];

  function userController($scope, userService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'boom';
    vm.user = {};
    vm.onSubmit = function() {
      console.log('it worked', vm.user);
    };
    console.log(userService.test);
  }
})();
