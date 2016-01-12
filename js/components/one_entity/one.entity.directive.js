(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entityOne', entityOne);

  /** @ngInject */
  function entityOne() {
    var directive = {
        restrict: "E",
        templateUrl: 'js/components/one_entity/one_entity.html',
        scope: {
          title: "@",
        },
        controller: OneEntityController,
        controllerAs: 'one_ent',
        bindToController: true
    };
    return directive;

    /** @ngInject */
    function OneEntityController($location, $rootScope) {
      var vm = this;
      vm.entity = JSON.parse(localStorage.getItem(vm.title));
      $rootScope.$on('entityEdit', function(event, obj){
        vm.entity = JSON.parse(localStorage.getItem(obj.title));
      });
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
  }
})();
