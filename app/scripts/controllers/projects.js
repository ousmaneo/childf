'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
