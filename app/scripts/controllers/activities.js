'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ActivityCtrl',['$scope','activity','ModalService','_','moment', function ($scope,activity,ModalService,_,moment) {
     var vm = this;
    vm.activities = [];
    vm.activity = {};
    // vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    
    activity.getData().$promise.then(function(data) {
        vm.activities = data;
    });


    vm.show = function() {
        ModalService.showModal({
            templateUrl: 'views/activity/new.html',
            controller: 'ModalCtrl',
            inputs: {
              title: 'Add activity'
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                if (result) {
                  vm.create(result);
                  vm.activities.push(vm.activity);
                }              
            });
        });
    };

    vm.create=function(activity){
      vm.activity.name = activity.name;
      vm.activity.description = activity.description;
      vm.activity.status = activity.status;
      vm.activity.projectid = activity.projectid;
      vm.activity.createdBy = 'neo';
      vm.activity.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
    
  }]);
