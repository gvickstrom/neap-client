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
    vm.newUser = {};
    vm.onSubmit = function() {
      userService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.user = {};
    };
    vm.register = function() {
      userService.register(vm.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.newUser = {};
    };
  }

})();
