'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProgramsCtrl
 * @description
 * # ProgramsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProgramsCtrl',['$scope','program','ModalService','_','moment','programS','programItem','$state', function ($scope,program,ModalService,_,moment,programS,programItem,$state) {
    if(programS){
      $scope.programs = programS;
    }else{
      $scope.programs=[];
    }
    if(programItem){
      $scope.program =  programItem;
    }else{
      $scope.program = {};

    }


    // vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    //program.getData().$promise.then(function(data) {
    //    vm.programs = data;
    //});

    $scope.show = function(action) {

      if(action){
        var Program = _.find($scope.programs, function (item) {
          return item._id == action.id;
        });
      }


      ModalService.showModal({
        templateUrl: 'views/program/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'program',
          item:Program,
          select:{},
          current:''
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.programs.push($scope.program);
            }else{
              $scope.update(result);
            }
          }
        });
      });
    };

    $scope.create=function(program) {
      $scope.program.name = program.name;
      $scope.program.description = program.description;
      $scope.program.status = program.status;
      $scope.program.createdBy = 'neo';
      $scope.program.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');

    };

    $scope.cancel= function () {
      $state.go('programs');
    };
    $scope.update = function (program) {
      //$scope.program._id = program._id;
      //$scope.program.name = program.name;
      //$scope.program.description = program.description;
      //$scope.program.status = program.status;
      //$scope.program.createdBy = program.createdBy;
      //$scope.program.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('programs');
    };

  }]);
