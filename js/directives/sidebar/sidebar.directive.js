(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entitySidebar', entitySidebar);

  /** @ngInject */
  function entitySidebar() {
    return {
          restrict: "EAC",
          scope: {
            header: "@",
            entitiesList: "=",
        },
        templateUrl: 'js/directives/sidebar/sidebar.html',
    };
  }
})();
