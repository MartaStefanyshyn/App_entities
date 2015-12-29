(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('EntitiesController', EntitiesController);

  /** @ngInject */
  function EntitiesController() {
    var vm = this;
    vm.entits = [];
    vm.addEntity = function(){
      vm.entits.push(vm.entit);
      vm.entit = [];
    };
    vm.deleteEntity = function(index){
      vm.entits.splice(index, 1);
    };
  }
})();
