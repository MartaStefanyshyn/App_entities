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
        templateUrl: 'html/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      }).state('entity', {
        url: '/entity',
        templateUrl: 'html/entities.html',
        controller: 'EntitiesController',
        controllerAs: 'ent'
      }).state('new_entity', {
        url: '/new_entity',
        templateUrl: 'html/new_entity.html',
        controller: 'NewEntityController',
        controllerAs: 'new_ent'
      }).state('one_entity', {
        url: '/one_entity/:title',
        templateUrl: 'html/one_entity.html',
        controller: 'OneEntityController',
        controllerAs: 'one_ent'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
