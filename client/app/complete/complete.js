
angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('complete', {
        url: '/complete',
        templateUrl: 'app/complete/complete.html',
        controller: 'CompleteCtrl'
      });
  });