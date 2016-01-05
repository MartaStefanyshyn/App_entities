(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('ModalController', ModalController);

  /** @ngInject */
  function ModalController($uibModalInstance, entity, header, Flash) {
    var vm = this;
    vm.header = header;
    vm.entity = entity;
    vm.ok = function () {
      if (vm.header=="New Entity" && JSON.parse(localStorage.getItem(vm.entity.title))){
        Flash.create('danger', "Entity with such title already exist in LocalStarage")
      }
      else{
        $uibModalInstance.close(vm.entity);
      }
    };

    vm.undo = function () {
      vm.entity = JSON.parse(localStorage.getItem(entity.title));
      entity = JSON.parse(localStorage.getItem(entity.title));
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  }
})();
