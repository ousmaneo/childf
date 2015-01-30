'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ProgramsCtrl
 * @description
 * # ProgramsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ProgramsCtrl',['$scope','program','ModalService','_','moment', function ($scope,program,ModalService,_,moment) {
    var vm = this;
    vm.programs = [];
    vm.program = {};
    // vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    
    program.getData().$promise.then(function(data) {
        vm.programs = data;
    });


    vm.show = function() {
        ModalService.showModal({
            templateUrl: 'views/program/new.html',
            controller: 'ModalCtrl',
            inputs: {
              title: 'Add program'
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                if (result) {
                  vm.create(result);
                  vm.programs.push(vm.program);
                }              
            });
        });
    };

    vm.create=function(program){
      vm.program.name = program.name;
      vm.program.description = program.description;
      vm.program.status = program.status;
      vm.program.createdBy = 'neo';
      vm.program.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
    
  }]);
