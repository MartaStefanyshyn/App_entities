(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('NewController', NewController);

  /** @ngInject */
  function NewController($location, $uibModal, $log, $rootScope) {
    var vm = this;
    vm.open = function (entity) {
      vm.entity = entity;
      var modalInstance = $uibModal.open({
        templateUrl: 'html/new_entity.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ModalInstanceCtrl($uibModalInstance, entity) {
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
                    },
        controllerAs: 'mod',
        resolve: {
            entity: function () {
                return vm.entity;
            }
        }
      });
      modalInstance.result.then(function (data) {
        localStorage.setItem(data.title, JSON.stringify(data));
        $rootScope.$emit('entityAdd', data);
      });

    };
  }
})();
