(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .factory('modalFactory', modalFactory);

  /** @ngInject */
  function modalFactory($uibModal) {
    return {
      openDialogEx: function(options) {
        $uibModal.open(options);
      },

      openDialog: function(view, controller) {
        this.openDialogEx({
          backdrop: true,
          dialogFade: true,
          backdropFade: true,
          keyboard: true,
          backdropClick: false,
          templateUrl: view,
          controller: ModalController,
          controllerAs: 'mod'
        });
      }
    }
    /** @ngInject */
    function ModalController($uibModalInstance) {
      var vm = this;
      vm.entity = {
        title:"lalal",
        text:"lalal",
        description:"lalal"
      };
      vm.ok = function () {
        $uibModalInstance.close('ok');
        console.log(vm.entity);
      };

      vm.cancel = function () {
        $uibModalInstance.close('cancel');
      };
    }
  }
})();
