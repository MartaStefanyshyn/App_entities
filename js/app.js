// (function() {
'use strict';

import { userService } from './components/login-page/user.service.js';

angular.module('entitiesAngular', [
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'flash',
      'mgcrea.ngStrap',
      'ngMockE2E'
    ])
  //   .config(config)
  //   .config(appRoutes)
  //   .run(run);
  // var app = angular
  //   .module('entitiesAngular', ['ngResource', 'ui.router', 'ui.bootstrap', 'flash', 'mgcrea.ngStrap', 'ngMockE2E']);

// })();
.run(function($httpBackend, $rootScope) {
    $httpBackend.whenGET(/\.html$/).passThrough();

  $httpBackend.whenPOST('/user_login').respond(function(method, url, data, headers){
    console.log('Received these data:', method, url, data, headers);
    data = JSON.parse(data);
    $rootScope.user = {
      username: data.username,
      password: data.password
    };
    return [200, {}, {}];
  });
  //
  $httpBackend.whenGET('/check_authentication').respond(function(method,url,data) {
    console.log($rootScope.user);
    console.log((angular.equals({}, $rootScope.user)));
    if (angular.equals({}, $rootScope.user) || !$rootScope.user) {
      return [401, {}, {}];
    }
    return [200, $rootScope.user, {}]
  });
});


angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['entitiesAngular'], {
        strictDi: false
    });
});