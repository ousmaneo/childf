'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ActivitiesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
