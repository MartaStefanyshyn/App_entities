(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('OneEntityController', OneEntityController);

  /** @ngInject */
  function OneEntityController($stateParams, $location) {
    var vm = this;
    vm.entity = JSON.parse(localStorage.getItem($stateParams.title));
    vm.editEnable = false;
    vm.enableEdit = function() {
      vm.editEnable = true;
      vm.editableDescription = vm.entity.description;
      vm.editableText = vm.entity.text;
    };
    vm.disableEdit = function() {
      vm.editEnable = false;
    };
    vm.save = function() {
      vm.entity.text = vm.editableText;
      vm.entity.description = vm.editableDescription;
      localStorage[vm.entity.title] = JSON.stringify(vm.entity);
      vm.disableEdit();
    };
    vm.deleteEntity = function(title){
      localStorage.removeItem(title);
      $location.path('/entity');
    };
    vm.showEntity = function(title){
      $location.path('/one_entity/' + title);
    };
  }
})();
