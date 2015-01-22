'use strict';

/**
 * @ngdoc overview
 * @name childfundApp
 * @description
 * # childfundApp
 *
 * Main module of the application.
 */
angular
  .module('childfundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'datatables'
  ])
  .config(function ( $stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when('', '/login');

     $stateProvider

      .state('index', {
        abstract:true,
        views:{
          'applicationContainer':{
            templateUrl: '../views/layout.html',
            controller:'MainCtrl'
          },
        }
      })
     // HOME STATES AND NESTED VIEWS ========================================
      .state('home',{
        url:'/home',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: '../views/main.html',
            controller:'MainCtrl'
          }
        }        
      })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('about', {
        url:'/about',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: '../views/about.html',
            controller:'MainCtrl'
          }
        }      
      })
    // LOGIN/ REGISTRATION PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('login', {
        url: '/login',        
        views:{
          'applicationContainer':{
            templateUrl: 'views/login.html',
            controller:'UserCtrl'
          }
        }
      })       
       .state('programs', {
        url: '/programs',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/programs.html',
            controller: 'ProgramsCtrl'    
          }         
        }
       })
       .state('projects', {
        url: '/projects',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/projects.html',
            controller: 'ProjectsCtrl'    
          }         
        }
       })
       .state('activities', {
        url: '/activities',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/activities.html',
            controller: 'ActivityCtrl'    
          }         
        }
       })
       .state('receipts', {
        url: '/receipts',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/receipts.html',
            controller: 'ReceiptsCtrl'    
          }         
        }
       })
       .state('payments', {
        url: '/payments',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/payments.html',
            controller: 'PaymentsCtrl'    
          }         
        }
       })
       .state('budgets', {
        url: '/budgets',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/budgets.html',
            controller: 'BudgetsCtrl'    
          }         
        }
       })
       .state('reports', {
        url: '/reports',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/reports.html',
            controller: 'ReportsCtrl'    
          }         
        }
       })
      ;  
  });