'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:PaymentsCtrl
 * @description
 * # PaymentsCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('PaymentsCtrl',['$scope','payment','ModalService','_','moment','paymentS','paymentItem','$state', function ($scope,payment,ModalService,_,moment,paymentS,paymentItem,$state) {
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


    $scope.show = function(action) {

      if(action){
        var Payment = _.find($scope.payments, function (item) {
          return item._id == action.id;
        });
      }


      ModalService.showModal({
        templateUrl: 'views/payment/new.html',
        controller: 'ModalCtrl',
        inputs: {
          title: 'payment',
          item:Payment
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result) {
            if(!result._id){
              $scope.create(result);
              $scope.payments.push($scope.payment);
            }else{
              $scope.update(result)
            }
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

    $scope.cancel= function () {
      $state.go('payments');
    };
    $scope.update=function(payment){
      //console.log(payment);
      //$scope.payment._id = payment._id;
      //$scope.payment.title = payment.title;
      //$scope.payment.description = payment.description;
      //$scope.payment.accountId = payment.accountId;
      //$scope.payment.fiscalYear = payment.fiscalYear;
      //$scope.payment.fundSource = payment.fundSource;
      //$scope.payment.status = payment.status;
      //$scope.payment.createdBy = 'neo';
      //$scope.payment.createdDate = new moment().format('YYYY-MM-DD HH:mm:ss');
      $state.go('payments');
    };
  }]);
