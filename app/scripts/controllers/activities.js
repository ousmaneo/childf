'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ActivityCtrl',['$scope','activity','ModalService','_','moment','activityS','activityItem','$state','project', function ($scope,activity,ModalService,_,moment,activityS,activityItem,$state,project) {
    if(activityS){
      $scope.activities = activityS;
    }else{
      $scope.activities=[];
    }
    if(activityItem){
      $scope.activity =  activityItem;
    }else{
      $scope.activity = {};
    }
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);



    $scope.projects=[];

    project.getData().$promise.then(function(data) {
      $scope.projects = data;
    });

    $scope.show = function(action) {

      if(action){
        var Activity = _.find($scope.activities, function (item) {
          return item._id == action.id;
        });
      }


      ModalService.showModal({
        templateUrl: 'views/activity/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'activity',
          item:Activity,
          select:$scope.projects,
          current:''
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.activities.push($scope.activity);
            }else{
              $scope.update(result)
            }
          }
        });
      });
    };
    $scope.create=function(activity){
      $scope.activity.name = activity.name;
      $scope.activity.description = activity.description;
      $scope.activity.status = activity.status;
      $scope.activity.projectid = activity.projectid;
      $scope.activity.createdBy = 'neo';
      $scope.activity.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');

    };
    $scope.cancel= function () {
      $state.go('activities');
    };
    $scope.update=function(activity){
      //$scope.activity._id = activity._id;
      //$scope.activity.name = activity.name;
      //$scope.activity.description = activity.description;
      //$scope.activity.status = activity.status;
      //$scope.activity.projectid = activity.projectid;
      //$scope.activity.createdBy = activity.createdBy;
      //$scope.activity.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('activities');
    };

  }]);
