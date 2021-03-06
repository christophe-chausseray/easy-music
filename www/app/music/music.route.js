/**
 * Music Router
 * @namespace Routers
 */
(function() {
    'use strict';

    angular
        .module('easy-music.music')
        .config(appConfig);

    /* @ngInject */
    appConfig.$inject = ['$stateProvider', '$sceDelegateProvider'];

    /**
     * @namespace MusicRouter
     * @desc Declare the routes of music's module.
     * @memberOf Routers
     */
    function appConfig($stateProvider, $sceDelegateProvider) {
        $stateProvider
            .state('music', {
                url: '/search/track',
                templateUrl: 'app/music/music.search.html',
                controller: 'MusicController',
                controllerAs: 'vm'
            });

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://p.scdn.co/mp3-preview/**'
        ]);
    }

})();
