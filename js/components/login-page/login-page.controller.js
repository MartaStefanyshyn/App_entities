(function() {
    'use strict';

    angular
        .module('entitiesAngular')
        .controller('loginController', loginController);

    /** @ngInject */
    function loginController($http, $state, idleService, $rootScope) {
        this.login = function(){
            $http.post('/user_login', this.credentials).then(function(resp) {
                console.log(111, resp);
                console.log($rootScope.user);
                idleService.resetTimer();
                $state.go('entity');
            });
            console.log(this.credentials);
        };
    }
})();
