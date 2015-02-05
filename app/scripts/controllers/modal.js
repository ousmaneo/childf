'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ModalCtrl', function ($scope,close,title,item,select,current) {
    $scope.title = 'Add ' + title;
    if(item){
      $scope.title = 'Update ' + title;
      $scope[title] = item;
    }

    if(select){
      $scope.options = select;
    }
    if(current){
      $scope.current = current;
    }

    $scope.close = function(result) {
      close(result, 500); // close, but give 500ms for bootstrap to animate
    };
     $scope.cancel = function() {
       close(null,500);
     };
  });
