(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('NewController', NewController);

  /** @ngInject */
  function NewController($location, $uibModal, $log, $rootScope) {
    var vm = this;
    vm.open = function (entity, header) {
      vm.entity = entity;
      vm.header = header;
      var modalInstance = $uibModal.open({
        templateUrl: 'html/new_entity.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ModalInstanceCtrl($uibModalInstance, entity, header, Flash) {
                      var vm = this;
                      vm.entity = entity;
                      vm.header = header;
                      vm.ok = function () {
                        for (var i in vm.entity) {
                          if (entity.hasOwnProperty(i)) {
                            entity[i] = vm.entity[i];
                          }
                        }
                        if (vm.header=="New Entity" && JSON.parse(localStorage.getItem(vm.entity.title))){
                          Flash.create('danger', "Entity with such title already exist in LocalStarage")
                        }
                        else{
                          $uibModalInstance.close(vm.entity);
                        }
                      };

                      vm.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                      };
                    },
        controllerAs: 'mod',
        resolve: {
            entity: function () {
                return vm.entity;
            },
            header: function () {
                return vm.header;
            }
        }
      });
      modalInstance.result.then(function (data) {
        if (vm.header == 'New Entity'){
          localStorage.setItem(data.title, JSON.stringify(data));
          $rootScope.$emit('entityAdd', data);
        }
        else{
          localStorage[data.title] = JSON.stringify(data);
          $rootScope.$emit('entityEdit', data);
        }
      });

    };
  }
})();
