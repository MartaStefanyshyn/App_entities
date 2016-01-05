(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .directive('entityFooter', entityFooter);

  /** @ngInject */
  function entityFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'js/directives/footer/footer.html',
    };
    return directive;
  }

})();
