'use strict';

/**
 * @ngdoc directive
 * @name childfundApp.directive:widgetFooter
 * @description
 * # widgetFooter
 */
angular.module('childfundApp')
  .directive('widgetFooter', function () {
    return {
        requires: '^caWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
  });
