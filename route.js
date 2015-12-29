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
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      }).state('entity', {
        url: '/entity',
        templateUrl: 'entities.html',
        controller: 'EntitiesController',
        controllerAs: 'ent'
      }).state('new_entity', {
        url: '/new_entity',
        templateUrl: 'new_entity.html',
        controller: 'NewEntityController',
        controllerAs: 'new_ent'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
