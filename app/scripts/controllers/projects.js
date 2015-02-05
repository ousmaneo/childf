'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProjectsCtrl',['$scope','project','ModalService','_','moment','projectS','projectItem','$state','program', function ($scope,project,ModalService,_,moment,projectS,projectItem,$state,program) {
    if(projectS){
      $scope.projects = projectS;
    }else{
      $scope.projects=[];
    }
    if(projectItem){
      $scope.project =  projectItem;
    }else{
      $scope.project = {};
    }

    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    //project.getData().$promise.then(function(data) {
    //    $scope.projects = data;
    //});
    $scope.programs=[];

    program.getData().$promise.then(function(data) {
      $scope.programs = data;
    });
    console.log($scope.programs);
    $scope.show = function(action) {

      if(action){
        var Project = _.find($scope.projects, function (item) {
          return item._id == action.id;
        });
      }

      //console.log(Programs);
      ModalService.showModal({
        templateUrl: 'views/project/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'project',
          item:Project
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.projects.push($scope.project);
            }else{
              $scope.update(result);
            }
          }
        });
      });
    };

    $scope.create = function(project){
      $scope.project.name = project.name;
      $scope.project.description = project.description;
      $scope.project.programid = project.programid;
      $scope.project.status = project.status;
      $scope.project.createdBy = 'neo';
      $scope.project.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');

    };

    $scope.cancel= function () {
      $state.go('projects');
    };
    $scope.update = function(project){
      //console.log(project);
      //$scope.project._id = project._id;
      //$scope.project.name = project.name;
      //$scope.project.description = project.description;
      //$scope.project.programid = project.programid;
      //$scope.project.status = project.status;
      //$scope.project.createdBy = 'neo';
      //$scope.project.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('projects');
    };
  }]);
