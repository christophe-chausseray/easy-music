/**
 * Music Factory
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('easy-music.music')
        .factory('Music', Music)
    ;

    /* @ngInject */
    Music.$inject = ['$http'];

    /**
     * @namespace Music
     * @desc Method about the tracks.
     * @memberOf Factories
     */
    function Music ($http) {
        return {
            search: search
        };

        /**
         * @name search
         * @desc Function to search a track on Spotify.
         * @returns {Object}
         * @memberOf Factories.Music
         */
        function search(name) {
            return $http.get('https://api.spotify.com/v1/search?q=' + window.encodeURIComponent(name) + '&type=track')
                .then(getTrackComplete)
                .catch(getTrackFailed)
                ;

            /**
             * @name getTrackComplete
             * @desc Function to return the tracks found for this research on Spotify.
             * @returns {Object}
             * @memberOf Factories.Music.search
             */
            function getTrackComplete(response) {
                return response.data;
            }

            /**
             * @name getTrackFailed
             * @desc Function to return the exception thrown by Spotify.
             * @returns {Object}
             * @memberOf Factories.Music.search
             */
            function getTrackFailed(error) {
                return error;
            }
        }
    }
})();
