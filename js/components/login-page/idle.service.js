(function() {
    'use strict';

    angular
        .module('entitiesAngular')
        .service('idleService', idleService);

    /** @ngInject */
    function idleService($rootScope, $timeout, $log) {
        var idleTimer = null,
            startTimer = function () {
                $log.log('Starting timer');
                idleTimer = $timeout(timerExpiring, 10000);
            },
            stopTimer = function () {
                if (idleTimer) {
                    $timeout.cancel(idleTimer);
                }
            },
            resetTimer = function () {
                stopTimer();
                startTimer();
            },
            timerExpiring = function () {
                stopTimer();
                $rootScope.$broadcast('sessionExpiring');
                $log.log('Timer expiring ..');
            };
        return {
            startTimer: startTimer,
            stopTimer: stopTimer,
            resetTimer: resetTimer
        };
    }
})();