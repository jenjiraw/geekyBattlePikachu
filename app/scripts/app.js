'use strict';

angular.module('geekyBattlePikachuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BattleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
