(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('EntitiesController', EntitiesController);

  /** @ngInject */
  function EntitiesController() {
    var vm = this;
    vm.entits = [];
    for (var i = 0; i<localStorage.length; i++) {
      vm.entits.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    };

    vm.addEntity = function(){
      localStorage.setItem(vm.entit.title, JSON.stringify(vm.entit));
      vm.entits.push(JSON.parse(localStorage.getItem(vm.entit.title)));
      vm.entit = [];
    };
    vm.deleteEntity = function(item){
      localStorage.removeItem(item)
    };
  }
})();
