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
      }).state('cam', {
        url: '/cam',
        controller: 'BpmController',
        controllerAs: 'bpmc',
        templateUrl: 'js/bpm/tasks.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
