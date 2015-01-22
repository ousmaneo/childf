'use strict';

/**
 * @ngdoc directive
 * @name childfundApp.directive:widgetHeader
 * @description
 * # widgetHeader
 */
angular.module('childfundApp')
  .directive('widgetHeader', function () {
    return {
      requires: '^caWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><i class="fa" ng-class="icon"></i> {{title}} <div class="pull-right" ng-transclude></div></div>',
        restrict: 'E'
    };
  });
