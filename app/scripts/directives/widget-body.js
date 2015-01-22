'use strict';

/**
 * @ngdoc directive
 * @name childfundApp.directive:widgetBody
 * @description
 * # widgetBody
 */
angular.module('childfundApp')
  .directive('widgetBody', function () {
    return {
       requires: '^caWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
  });
