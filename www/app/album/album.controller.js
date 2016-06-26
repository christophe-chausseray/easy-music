/**
 * Album Controller
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('easy-music.album')
        .controller('AlbumController', AlbumController);

    /* @ngInject */
    AlbumController.$inject = ['$scope', '$q', 'logger', 'Album', '$stateParams'];

    /**
     * @namespace AlbumController
     * @desc Action about the album page.
     * @memberOf Controllers
     */
    function AlbumController($scope, $q, logger, Album, $stateParams) {
        var vm = this;

        activate();

        /**
         * @name activate
         * @desc Function to load all the content we need on the view.
         * @returns {Object}
         * @memberOf Controllers.AlbumController
         */
        function activate() {
            var promises = [displayAlbum()];

            return $q.all(promises).then(function() {
                logger.info('Activated album detail view.');
            });
        }

        /**
         * @name displayAlbum
         * @desc Function to all the details of a album.
         * @returns {Object}
         * @memberOf Controllers.AlbumController
         */
        function displayAlbum() {
            return Album.getDetails($stateParams.id)
                .then(function(data) {
                    vm.albumDetails = data;
                    vm.tracks = data.tracks.items;
                })
            ;
        }
    }
})();
