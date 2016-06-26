/**
 * Music Controller
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('easy-music.music')
        .controller('MusicController', MusicController);

    /* @ngInject */
    MusicController.$inject = ['$scope', 'Music'];

    /**
     * @namespace MusicController
     * @desc Action about the music page.
     * @memberOf Controllers
     */
    function MusicController($scope, Music) {
        var vm = this;

        vm.search = search;

        /**
         * @name search
         * @desc Function to search and display song from Spotify.
         * @returns {Object}
         * @memberOf Controllers.MusicController
         */
        function search() {
            Music.search(vm.name)
                .then(function(data) {
                    vm.tracks = data.tracks.items;
                })
            ;
        }
    }
})();
