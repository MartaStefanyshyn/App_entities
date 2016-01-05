(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entityNavbar', entityNavbar);

  /** @ngInject */
  function entityNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'js/directives/navbar/navbar.html',
    };
    return directive;
  }

})();
