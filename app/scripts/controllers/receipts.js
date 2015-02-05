'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:ReceiptsCtrl
 * @description
 * # ReceiptsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('ReceiptsCtrl',['$scope','receipt','ModalService','_','moment','receiptS','receiptItem','$state','account', function ($scope,receipt,ModalService,_,moment,receiptS,receiptItem,$state,account) {

    if(receiptS){
      $scope.receipts = receiptS;
    }else{
      $scope.receipts=[];
    }
    if(receiptItem){
      $scope.receipt =  receiptItem;
    }else{
      $scope.receipt = {};
    }
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    $scope.accounts=[];

    account.getData().$promise.then(function(data) {
      $scope.accounts = data;
    });



    $scope.show = function(action) {

      if(action){
        var Receipt = _.find($scope.receipts, function (item) {
          return item._id == action.id;
        });
      }

      ModalService.showModal({
        templateUrl: 'views/receipt/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'receipt',
          item:Receipt,
          select:$scope.accounts,
          current:''
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            $scope.create(result);
            $scope.receipts.push($scope.receipt);
          }
        });
      });
    };

    $scope.create=function(receipt){
      $scope.receipt.title = receipt.title;
      $scope.receipt.description = receipt.description;
      $scope.receipt.accountId = receipt.accountId;
      $scope.receipt.bankAccount = receipt.bankAccount;
      $scope.receipt.amount = receipt.amount;
      $scope.receipt.fundSource = receipt.fundSource;
      $scope.receipt.documentType = receipt.documentType;
      $scope.receipt.receiptDate = receipt.receiptDate;
      $scope.receipt.createdBy = 'neo';
      $scope.receipt.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');


    };
    $scope.cancel= function () {
      $state.go('receipts');
    };
    $scope.update=function(receipt){
      //$scope.receipt._id = receipt._id;
      //$scope.receipt.title = receipt.title;
      //$scope.receipt.description = receipt.description;
      //$scope.receipt.accountId = receipt.accountId;
      //$scope.receipt.bankAccount = receipt.bankAccount;
      //$scope.receipt.amount = receipt.amount;
      //$scope.receipt.fundSource = receipt.fundSource;
      //$scope.receipt.documentType = receipt.documentType;
      //$scope.receipt.receiptDate = receipt.receiptDate;
      //$scope.receipt.createdBy = 'neo';
      //$scope.receipt.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('receipts');
    };
  }]);
