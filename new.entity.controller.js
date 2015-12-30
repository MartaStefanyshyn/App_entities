(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('NewEntityController', NewEntityController);

  /** @ngInject */
  function NewEntityController($uibModal, $log) {
    var vm = this;
    vm.entity = {
      title: "title",
      description: "description",
      text: "text"
    };
    vm.open = function () {

      var modalInstance = $uibModal.open({
        templateUrl: 'new_entity.html',
        controller: 'ModalInstanceCtrl as mod',
        resolve: {
            entity: function () {
                return vm.entity;
            }
        }
      });
      modalInstance.result.then(function (data) {
        localStorage.setItem(data.title, JSON.stringify(data));
      });
    };
  }
})();
