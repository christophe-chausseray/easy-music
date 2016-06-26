/**
 * Concert Factory
 * @namespace Factories
 */
(function() {
  'use strict';

  angular
    .module('easy-music.concert')
    .factory('Concert', Concert)
  ;

  /* @ngInject */
  Concert.$inject = ['$http', '$cordovaGeolocation', 'logger'];

  /**
   * @namespace Concert
   * @desc Method about the concert event.
   * @memberOf Factories
   */
  function Concert ($http, $cordovaGeolocation, logger) {
    return {
      getCurrantLocation: getCurrantLocation,
      getEventsNearToMe: getEventsNearToMe,
      centerMap: centerMap,
      displayMyPosition: displayMyPosition,
      displayEventsPosition: displayEventsPosition
    };

    /**
     * @name getCurrantLocation
     * @desc Function to get the current location.
     * @returns {Object}
     * @memberOf Factories.Concert
     */
    function getCurrantLocation() {
      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      return $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
          return position.coords;
        }, function(error) {
          logger.warning('Impossible to get your location.');
          return error;
        })
      ;
    }

    /**
     * @name getEventsNearToMe
     * @desc Function to get events near to the current location.
     * @returns {Object}
     * @memberOf Factories.Concert
     */
    function getEventsNearToMe(geolocation) {
      return $http
        .get('http://api.songkick.com/api/3.0/events.json?location=geo:' + geolocation.latitude + ',' + geolocation.longitude + '&apikey=LxsukqUBGjMw28Ow')
        .then(getEventsComplete)
        .catch(getEventsFailed)
      ;

      /**
       * @name getEventsComplete
       * @desc Function to return the data from Songkick API about the events.
       * @returns {Object}
       * @memberOf Factories.Concert.getEventsNearToMe
       */
      function getEventsComplete(response) {
        return response.data.resultsPage;
      }

      /**
       * @name getEventsFailed
       * @desc Function to return the error thrown by Songkick API.
       * @returns {Object}
       * @memberOf Factories.Concert.getEventsNearToMe
       */
      function getEventsFailed(error) {
        return error;
      }
    }

    /**
     * @name centerMap
     * @desc Function to set the center of the map.
     * @returns {Object}
     * @memberOf Factories.Concert
     */
    function centerMap(map, location) {
      var geolocation = new google.maps.LatLng(location.lat, location.lng);
      map.setCenter(geolocation);
    }

    /**
     * @name displayMyPosition
     * @desc Function to display the current position on the map.
     * @returns {Object}
     * @memberOf Factories.Concert
     */
    function displayMyPosition(map, location) {
      return new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        map: map,
        position: new google.maps.LatLng(location.lat, location.lng)
      });
    }

    /**
     * @name displayEventsPosition
     * @desc Function to display the events position on the map.
     * @returns {Object}
     * @memberOf Factories.Concert
     */
    function displayEventsPosition(map, events) {
      angular.forEach(events, function(value, key) {
        return new google.maps.Marker({
          title: value.displayName,
          map: map,
          position: new google.maps.LatLng(value.location.lat, value.location.lng)
        });
      });
    }
  }
})();
