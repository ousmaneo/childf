'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProjectsCtrl',['$scope','project','ModalService','_','moment','projectS','projectItem', function ($scope,project,ModalService,_,moment,projectS,projectItem) {
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


    $scope.show = function() {
        ModalService.showModal({
            templateUrl: 'views/project/new.html',
            controller: 'ModalCtrl',
            inputs: {
              title: 'Add project'
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                if (result) {
                  $scope.create(result);
                  $scope.projects.push($scope.project);
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

    $scope.update = function(project){
      console.log(project);
      $scope.project._id = project._id;
      $scope.project.name = project.name;
      $scope.project.description = project.description;
      $scope.project.programid = project.programid;
      $scope.project.status = project.status;
      $scope.project.createdBy = 'neo';
      $scope.project.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
  }]);
