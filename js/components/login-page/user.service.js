'use strict';

class userService {
    conctructor($http){
        this.$http = $http;
    }

    userLogin() {
        $http.post('/user_login', this.credentials).then(function(resp) {
            console.log(111, resp);
            console.log($rootScope.user);
            idleService.resetTimer();
            $state.go('entity');
        });
    }
}

export { userService };