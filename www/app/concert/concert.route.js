/**
 * Concert Router
 * @namespace Routers
 */
(function() {
    'use strict';

    angular
        .module('easy-music.concert')
        .config(appConfig);

    /* @ngInject */
    appConfig.$inject = ['$stateProvider'];

    /**
     * @namespace ConcertRouter
     * @desc Declare the routes of concert's module.
     * @memberOf Routers
     */
    function appConfig($stateProvider) {
        $stateProvider
            .state('concert', {
                url: '/show',
                templateUrl: 'app/concert/concert.show.html',
                controller: 'ConcertController',
                controllerAs: 'vm'
            })
        ;
    }
})();
