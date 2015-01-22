'use strict';

/**
 * @ngdoc directive
 * @name childfundApp.directive:cdLoading
 * @description
 * # cdLoading
 */
angular.module('childfundApp')
  .directive('cdLoading', function () {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
  });
