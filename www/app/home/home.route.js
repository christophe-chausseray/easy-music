/**
 * Home Router
 * @namespace Routers
 */
(function() {
    'use strict';

    angular
        .module('easy-music.home')
        .config(appConfig);

    /* @ngInject */
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * @namespace HomeRouter
     * @desc Declare the routes of home's module.
     * @memberOf Routers
     */
    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
        ;

        $urlRouterProvider.otherwise('/home');
    }

})();
