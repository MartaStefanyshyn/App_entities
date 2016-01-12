(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(modalFactory) {
    var vm = this;
    vm.createEntity = function() {
      modalFactory.openDialog('js/services/modal.html', 'ModalController');
    };
  }
})();
