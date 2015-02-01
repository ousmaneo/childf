'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:PaymentsCtrl
 * @description
 * # PaymentsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('PaymentsCtrl',['$scope','payment','ModalService','_','moment','paymentS','paymentItem', function ($scope,payment,ModalService,_,moment,paymentS,paymentItem) {
    if(paymentS){
      $scope.payments = paymentS;
    }else{
      $scope.payments=[];
    }
    if(paymentItem){
      $scope.payment =  paymentItem;
    }else{
      $scope.payment = {};
    }
    // $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    //payment.getData().$promise.then(function(data) {
    //  $scope.payments = data;
    //});


    $scope.show = function() {
      ModalService.showModal({
        templateUrl: 'views/payment/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'Add payment'
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            $scope.create(result);
            $scope.payments.push($scope.payment);
          }
        });
      });
    };

    $scope.create=function(payment){
      $scope.payment.title = payment.title;
      $scope.payment.description = payment.description;
      $scope.payment.accountId = payment.accountId;
      $scope.payment.fiscalYear = payment.fiscalYear;
      $scope.payment.fundSource = payment.fundSource;
      $scope.payment.status = payment.status;
      $scope.payment.createdBy = 'neo';
      $scope.payment.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
    $scope.update=function(payment){
      console.log(payment);
      $scope.payment._id = payment._id;
      $scope.payment.title = payment.title;
      $scope.payment.description = payment.description;
      $scope.payment.accountId = payment.accountId;
      $scope.payment.fiscalYear = payment.fiscalYear;
      $scope.payment.fundSource = payment.fundSource;
      $scope.payment.status = payment.status;
      $scope.payment.createdBy = 'neo';
      $scope.payment.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
    };
  }]);
