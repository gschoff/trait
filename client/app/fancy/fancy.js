'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fancy', {
        url: '/fancy/:id',
        templateUrl: 'app/fancy/fancy.html',
        controller: 'FancyCtrl'
      });
  });


