'use strict';

/**
 * @ngdoc directive
 * @name childfundApp.directive:widget
 * @description
 * # widget
 */
angular.module('childfundApp')
  .directive('caWidget', function () {
    return {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA',        
    };
  });

