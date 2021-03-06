'use strict';

/**
 * @ngdoc overview
 * @name andreaApp
 * @description
 * # andreaApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })      
	  .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/films', {
        templateUrl: 'views/films.html',
        controller: 'MainCtrl'
		})
      .when('/websites', {
        templateUrl: 'views/websites.html',
		controller: 'MainCtrl'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });
