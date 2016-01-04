(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('sidebarEntities', sidebarEntities);

  /** @ngInject */
  function sidebarEntities() {
    return {
          restrict: "EAC",
          scope: {
            header: "@",
            entitiesList: "=",
        },
        templateUrl: 'html/sidebar.html',
    };
  }
})();
