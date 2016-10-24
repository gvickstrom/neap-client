(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    const baseURL = 'http://whispering-wave-67278.herokuapp.com/coffee';
    /*jshint validthis: true */
    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };
    this.getSingleCoffee = function(id) {
      return $http.get(`${baseURL}${id}`);
    };
    this.addCoffee = function(coffee) {
      return $http.post(baseURL, coffee);
    };
  }

})();
