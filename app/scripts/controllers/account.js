'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('AccountCtrl',['$scope','account','ModalService','_','moment','accountS','accountItem','$state','$q', function ($scope,account,ModalService,_,moment,accountS,accountItem,$state,$q) {
    if(accountS){
      $scope.accounts = accountS;
    }else{
      $scope.accounts=[];
    }
    if(accountItem){
      $scope.account =  accountItem;
    }else{
      $scope.account = {};
    }
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);


    $scope.show = function(action) {

      if(action){
        var Account = _.find($scope.accounts, function (item) {
          return item._id == action.id;
        });
      }


      ModalService.showModal({
        templateUrl: 'views/account/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'account',
          item:Account
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.accounts.push($scope.account);
            }else{
                $scope.update(result)
            }
          }
        });
      });
    };

    $scope.create=function(account){
      $scope.account.name = account.name;
      $scope.account.description = account.description;
      $scope.account.status = account.status;
      $scope.account.accountId = account.accountId;
      $scope.account.accountType = account.accountType;
      $scope.account.createdBy = 'neo';
      $scope.account.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
    $scope.cancel= function () {
      $state.go('accounts');
    };
    $scope.update=function(account){
      //$scope.account._id = account._id;
      //$scope.account.name = account.name;
      //$scope.account.description = account.description;
      //$scope.account.status = account.status;
      //$scope.account.projectid = account.projectid;
      //$scope.account.createdBy = account.createdBy;
      //$scope.account.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('accounts');
    };

  }]);
