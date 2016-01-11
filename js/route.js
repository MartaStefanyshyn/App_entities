(function() {
  'use strict';

  angular
    .module('entitiesAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          '': {
            templateUrl: 'templates/home.html'
          },
        }
       }).state('entity', {
         url: '/entity',
         views: {
          '': {
            templateUrl: 'templates/entities.html'
          },
        }
       }).state('one_entity', {
         url: '/one_entity/:title',
         templateUrl: 'js/components/one_entity/one_entity.html',
         controller: 'OneEntityController',
         controllerAs: 'one_ent'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
