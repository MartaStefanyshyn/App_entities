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
            template: '<entity-sidebar header="Entities"></entity-sidebar>'
          },
        }
       }).state('one_entity', {
        url: '/one_entity/:title',
        views: {
          '': {
            template: function(params) {
                   return "<entity-one title="+params.title+"></entity-one>"; }
          }
        }
      }).state('login', {
        url: '/login',
        controller: 'loginController',
        controllerAs: 'ctrl',
        templateUrl: 'js/components/login-page/login-page.html'
      // }).state('cam', {
      //   url: '/cam',
      //   controller: 'BpmController',
      //   controllerAs: 'bpmc',
      //   templateUrl: 'js/bpm/tasks.html'
      // }).state('company_validation', {
      //   url: '/company_validation/:procInsId',
      //   controller: 'BpmController',
      //   controllerAs: 'bpmc',
      //   templateUrl: 'js/bpm/validation.html',
      //   params: {
      //     'procInsId': ''
      //   }
      // }).state('kendo', {
      //   url: '/kendo',
      //   controller: 'KendoController',
      //   controllerAs: 'knd',
      //   templateUrl: 'js/kendo_tutorial/kendo.html'
      // }).state('kendo_search', {
      //   url: '/kendo_search',
      //   controller: 'SearchController',
      //   controllerAs: 'srch',
      //   templateUrl: 'js/kendo_tutorial/kendo_search.html'
      // }).state('kendo_dir', {
      //   url: '/kendo_dir',
      //   views: {
      //     '': {
      //       template: function(params) {
      //              return "<kendo-collection columns='title, description, text'></kendo-collection>"; }
      //     }
      //   }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
