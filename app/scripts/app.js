'use strict';

/**
 * @ngdoc overview
 * @name cloudPosApp
 * @description
 * # cloudPosApp
 *
 * Main module of the application.
 */
angular
  .module('cloudPosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'isteven-multi-select',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesCtrl'
      })
      .when('/products/new', {
        templateUrl: 'views/product-edit.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
