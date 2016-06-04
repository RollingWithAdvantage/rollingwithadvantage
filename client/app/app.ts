'use strict';

angular.module('rollingwithadvantageApp', [
  'rollingwithadvantageApp.auth',
  'rollingwithadvantageApp.admin',
  'rollingwithadvantageApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
