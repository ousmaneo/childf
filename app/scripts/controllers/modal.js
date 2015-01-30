'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ModalCtrl', function ($scope,close,title) {
    $scope.title = title;
    $scope.close = function(result) {      
      close(result, 500); // close, but give 500ms for bootstrap to animate
    };
     $scope.cancel = function() {
       close(null,500);       
     };
  });
