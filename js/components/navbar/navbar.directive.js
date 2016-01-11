(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entityNavbar', entityNavbar);

  /** @ngInject */
  function entityNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'js/components/navbar/navbar.html',
    };
    return directive;
  }

})();
