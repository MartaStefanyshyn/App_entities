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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
