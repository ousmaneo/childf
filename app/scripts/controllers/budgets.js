'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:BudgetsCtrl
 * @description
 * # BudgetsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('BudgetsCtrl',['$scope','budget','ModalService','_','moment','budgetS','budgetItem','$state', function ($scope,budget,ModalService,_,moment,budgetS,budgetItem,$state) {
    if(budgetS){
      $scope.budgets = budgetS;
    }else{
      $scope.budgets=[];
    }
    if(budgetItem){
      $scope.budget =  budgetItem;
    }else{
      $scope.budget = {};
    }
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    //budget.getData().$promise.then(function(data) {
    //  $scope.budgets = data;
    //});


    $scope.show = function(action) {

      if(action){
        var Budget = _.find($scope.budgets, function (item) {
          return item._id == action.id;
        });
      }


      ModalService.showModal({
        templateUrl: 'views/budget/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'budget',
          item:Budget
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.budgets.push($scope.activity);
            }else{
              $scope.update(result)
            }
          }
        });
      });
    };
    $scope.create=function(budget){
      $scope.budget.title = budget.title;
      $scope.budget.description = budget.description;
      $scope.budget.accountId = budget.accountId;
      $scope.budget.fiscalYear = budget.fiscalYear;
      $scope.budget.fundSource = budget.fundSource;
      $scope.budget.status = budget.status;
      $scope.budget.createdBy = 'neo';
      $scope.budget.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');

    };

    $scope.cancel= function () {
      $state.go('budgets');
    };
    $scope.update=function(budget){
      console.log(budget);
      //$scope.budget._id = budget._id;
      //$scope.budget.title = budget.title;
      //$scope.budget.description = budget.description;
      //$scope.budget.accountId = budget.accountId;
      //$scope.budget.fiscalYear = budget.fiscalYear;
      //$scope.budget.fundSource = budget.fundSource;
      //$scope.budget.status = budget.status;
      //$scope.budget.createdBy = 'neo';
      //$scope.budget.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('budgets');
    };
  }]);
