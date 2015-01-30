'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('MainCtrl', ['$scope', '$cookieStore','DTOptionsBuilder','DTColumnBuilder',function ($scope,$cookieStore,DTOptionsBuilder,DTColumnBuilder) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };


    //Datatable:
     var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('scripts/controllers/data.json')
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('_id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Title'),
        DTColumnBuilder.newColumn('description').withTitle('Description'),
        DTColumnBuilder.newColumn('createdDate').withTitle('Date'),
        DTColumnBuilder.newColumn('projectName').withTitle('Project'),
    ];
  }]);
