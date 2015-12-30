(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  /** @ngInject */
  function ModalInstanceCtrl($uibModalInstance, entity) {
    var vm = this;
    vm.entity = entity;
    vm.ok = function () {
      for (var i in vm.entity) {
        if (entity.hasOwnProperty(i)) {
          entity[i] = vm.entity[i];
        }
      }
      $uibModalInstance.close(vm.entity);
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();

