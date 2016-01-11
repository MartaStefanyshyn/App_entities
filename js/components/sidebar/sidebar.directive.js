(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entitySidebar', entitySidebar);

  /** @ngInject */
  function entitySidebar() {
    var directive = {
        restrict: "E",
        templateUrl: 'js/components/sidebar/sidebar.html',
        controller: SidebarController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;

    /** @ngInject */
    function SidebarController($location, $uibModal, $log, $rootScope, $http) {
      var vm = this;
      vm.entits = [];

      for (var i = 0; i<localStorage.length; i++) {
        vm.entits.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      };
      $rootScope.$on('entityAdd', function(event, obj){
        vm.entits.push(JSON.parse(localStorage.getItem(obj.title)));
      });
      vm.retrieveFromFile = function(){
        $http.get('/entities.json')
          .then(function(result) {
            angular.forEach(result.data, function(entity) {
              if (!JSON.parse(localStorage.getItem(entity.title))){
                localStorage.setItem(entity.title, JSON.stringify(entity));
                vm.entits.push(JSON.parse(localStorage.getItem(entity.title)));
              }
            });
        });
      };
      vm.clearStorage = function(){
        localStorage.clear();
        vm.entits = [];
      };
      vm.addEntity = function(){
        localStorage.setItem(vm.entit.title, JSON.stringify(vm.entit));
        vm.entits.push(JSON.parse(localStorage.getItem(vm.entit.title)));
        vm.entit = {};
      };
      vm.deleteEntity = function(item){
        localStorage.removeItem(item)
        vm.entits.splice(JSON.parse(localStorage.getItem(item)), 1);
      };
      vm.showEntity = function(title){
        $location.path('/one_entity/' + title);
      };
    }
   }
})();
