'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProjectsCtrl',['$scope','project','ModalService','_','moment', function ($scope,project,ModalService,_,moment) {
    var vm = this;
    vm.projects = [];
    vm.project = {};
    // vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    
    project.getData().$promise.then(function(data) {
        vm.projects = data;
    });


    vm.show = function() {
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
                  vm.create(result);
                  vm.projects.push(vm.project);
                }              
            });
        });
    };

    vm.create=function(project){
      vm.project.name = project.name;
      vm.project.description = project.description;
      vm.project.status = project.status;
      vm.project.createdBy = 'neo';
      vm.project.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
  }]);
