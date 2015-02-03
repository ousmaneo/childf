'use strict';

/**
 * @ngdoc function
 * @name childfundApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the childfundApp
 */
angular.module('childfundApp')
  .controller('UserCtrl', function ($scope,$location) {
      // Register the login() function
      //$scope.login = function() {
      //   $location.url('home');
      //  $http.post('/login', {
      //     email: $scope.user.email,
      //     password: $scope.user.password
      //  })
      //    .success(function(response) {
      //       // authentication OK
      //       $scope.loginError = 0;
      //       $rootScope.user = response.user;
      //       $rootScope.$emit('loggedin');
      //       if (response.redirect) {
      //         if (window.location.href === response.redirect) {
      //           //This is so an admin user will get full admin page
      //           window.location.reload();
      //         } else {
      //           window.location = response.redirect;
      //         }
      //       } else {
      //         $location.url('/');
      //       }
      //    })
      //    .error(function() {
      //       $scope.loginerror = 'Authentication failed.';
      //    });
      //};
  });
