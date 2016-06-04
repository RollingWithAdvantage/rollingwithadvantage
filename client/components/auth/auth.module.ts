'use strict';

angular.module('rollingwithadvantageApp.auth', [
  'rollingwithadvantageApp.constants',
  'rollingwithadvantageApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
