(function() {
  'use strict';

  angular
    .module('easy-music.album')
    .config(appConfig);

  /* @ngInject */
  appConfig.$inject = ['$stateProvider', '$sceDelegateProvider'];

  function appConfig($stateProvider, $sceDelegateProvider) {
    $stateProvider
      .state('album', {
        url: '/album/display/:id',
        templateUrl: 'app/album/album.display.html',
        controller: 'AlbumController',
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
