(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm= this;
    vm.hello = "hello"

  }
})();
