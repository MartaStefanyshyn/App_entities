(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entityModal', entityModal);

  /** @ngInject */
  function entityModal($uibModal, $rootScope) {
    return {
      transclude: true,
      restrict: "EAC",
      scope: {
        header: "@",
        entity: "=",
        useController: "@"
      },
      template: '<span ng-click="open()" ng-transclude>{{name}}</span>',
      link: function(scope, element, attrs) {

            scope.open = function(){
                var modalInstance = $uibModal.open({
                    templateUrl: 'js/directives/modal/modal.html',
                    backdrop: true,
                    windowClass: 'modal',
                    controller:  scope.useController,
                    controllerAs: 'mod',
                    resolve: {
                        entity: function () {
                            return scope.entity;
                        },
                        header: function () {
                            return scope.header;
                        }
                    }
                });

                modalInstance.result.then(function (data) {
                  if (scope.header == 'New Entity'){
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
    };
  }
})();
