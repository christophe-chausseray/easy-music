/**
 * Concert Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

  angular
    .module('easy-music.music')
    .controller('ConcertController', ConcertController);

  /* @ngInject */
  ConcertController.$inject = ['$scope', 'Concert'];

  /**
   * @namespace ConcertController
   * @desc Action about the concert page.
   * @memberOf Controllers
   */
  function ConcertController($scope, Concert) {
    var vm = this;

    vm.mapCreated  = mapCreated;
    vm.myMarker    = [];
    vm.eventMarker = [];
    vm.map         = [];

    /**
     * @name mapCreated
     * @desc Function to display all elements on the map.
     * @returns {Object}
     * @memberOf Controllers.AlbumController
     */
    function mapCreated(map) {
      Concert.getCurrantLocation()
        .then(function(geolocation) {
          return Concert.getEventsNearToMe(geolocation);
        })
        .then(function(result) {
          Concert.centerMap(map, result.clientLocation);
          vm.myMarker = Concert.displayMyPosition(map, result.clientLocation);
          vm.eventMarker = Concert.displayEventsPosition(map, result.results.event);
          vm.map = map;
        })
      ;

    }
  }
})();
