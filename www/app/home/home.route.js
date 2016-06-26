(function() {
  'use strict';

  angular
    .module('easy-music.home')
    .config(appConfig);

  /* @ngInject */
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
    ;

    $urlRouterProvider.otherwise('/home');
  }

})();
