/**
 * Map
 * @namespace Widgets
 */
(function() {
  'use strict';

  angular
    .module('easy-music.widgets')
    .directive('map', map)
  ;

  /**
   * @name map
   * @desc Initialize and display the Google Map.
   * @memberOf Widgets
   */
  function map() {
    var directive = {
      restrict: 'E',
      scope: {
        onCreate: '&'
      },
      link: link
    };

    return directive;

    /**
     * @name link
     * @desc Initialize the Google Map.
     * @memberOf Widgets.map
     */
    function link($scope, $element, attrs) {
      /**
       * @name initialize
       * @desc Create a Google Map instance in the scope.
       * @memberOf Widgets.map.link
       */
      function initialize() {
        var mapOptions = {
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map($element[0], mapOptions);

        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      initialize();
    }
  }
})();
