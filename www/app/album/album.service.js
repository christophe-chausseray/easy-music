/**
 * Album Factory
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('easy-music.music')
        .factory('Album', Album)
    ;

    /* @ngInject */
    Album.$inject = ['$http'];

    /**
     * @namespace Album
     * @desc Method about the album.
     * @memberOf Factories
     */
    function Album ($http) {
        return {
            getDetails: getDetails
        };

        /**
         * @name getDetails
         * @desc Function to display the details of one album.
         * @returns {Object}
         * @memberOf Factories.Album
         */
        function getDetails(id) {
            return $http.get('https://api.spotify.com/v1/albums/' + id)
                .then(getDetailsComplete)
                .catch(getDetailsFailed)
                ;

            /**
             * @name getDetailsComplete
             * @desc Function to return the response from Spotify.
             * @returns {Object}
             * @memberOf Factories.Album.getDetails
             */
            function getDetailsComplete(response) {
                return response.data;
            }

            /**
             * @name getDetailsFailed
             * @desc Function to return the error thrown by Spotify.
             * @returns {Object}
             * @memberOf Factories.Album.getDetails
             */
            function getDetailsFailed(error) {
                return error;
            }
        }
    }
})();
