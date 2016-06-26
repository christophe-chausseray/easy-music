(function() {
  'use strict';

  angular
    .module('easy-music.concert')
    .config(appConfig);

  /* @ngInject */
  appConfig.$inject = ['$stateProvider', '$sceDelegateProvider'];

  function appConfig($stateProvider, $sceDelegateProvider) {
    $stateProvider
      .state('concert', {
        url: '/show',
        templateUrl: 'app/concert/concert.show.html',
        controller: 'ConcertController',
        controllerAs: 'vm'
      });
  }

})();
