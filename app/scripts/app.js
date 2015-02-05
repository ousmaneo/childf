'use strict';

/**
 * Underscore module
 */
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});
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
    'angularModalService',
    'datatables',
    'underscore',
    'mgcrea.ngStrap',
    'angularMoment'
  ])
  .config(function ( $stateProvider,$urlRouterProvider,$datepickerProvider) {

    $urlRouterProvider.when('', '/login');

     $stateProvider

      .state('index', {
        abstract:true,
        views:{
          'applicationContainer':{
            templateUrl: '../views/layout.html',
            controller:'MainCtrl'
          }
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
       .state('accounts', {
         url: '/accounts',
         parent:'index',
         resolve:{
           accountS :function ($stateParams, account,$q) {

             var accountsPromise = $q.defer();
             account.getData(function(data) {
               accountsPromise.resolve(data);
             });

             return accountsPromise.promise;
           },
           accountItem: function () {

           }
         },
         views:{
           'layoutContainer@index':{
             templateUrl: 'views/account/accounts.html',
             controller: 'AccountCtrl'
           }
         }

       })
       .state('viewAccount',{
         url:'/account/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/account/account-view.html',
             controller:'AccountCtrl'
           }
         },
         resolve:{
           accountItem :function ($stateParams, account,_,$q) {
             //console.log(program);
             var accountsPromise = $q.defer();
             account.getData(function(data) {
               var Account = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               accountsPromise.resolve(Account);
             });

             return accountsPromise.promise;
           },
           accountS: function () {

           }
         }
       })
       .state('editAccount',{
         url:'/account/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/account/account-edit.html',
             controller:'AccountCtrl'
           }
         },
         resolve:{
           accountItem :function ($stateParams, account,_,$q) {
             //console.log(program);
             var accountsPromise = $q.defer();
             account.getData(function(data) {
               var Account = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               accountsPromise.resolve(Account);
             });

             return accountsPromise.promise;
           },
           accountS: function () {

           }
         }
       })
       .state('programs', {
         url: '/programs',
         parent:'index',
         resolve:{
           programS :function ($stateParams, program,$q) {

             var programsPromise = $q.defer();
             program.getData(function(data) {
               programsPromise.resolve(data);
             });

             return programsPromise.promise;
           },
           programItem: function () {

           }
         },
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/program/programs.html',
            controller: 'ProgramsCtrl'
          }
        }

       })
       .state('viewProgram',{
         url:'/program/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/program/program-view.html',
             controller:'ProgramsCtrl'
           },
           'tableContainer@index':{
             templateUrl:'views/program/projects-partial.html',
             controller:'ProjectsCtrl'
           }
         },
         resolve:{
           programItem :function ($stateParams, program,_,$q) {
             //console.log(program);
             var programPromise = $q.defer();
             program.getData(function(data) {
               var Program = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               programPromise.resolve(Program);
             });

             return programPromise.promise;
           },
           programS: function () {

           },
           projectS: function ($stateParams, project,_,$q) {
             var projectPromise = $q.defer();
             project.getData(function(data) {
               var id = parseInt($stateParams.id);
               var Projects = _.where(data, {programid:id});
               projectPromise.resolve(Projects);
             });

             return projectPromise.promise;
           },
           projectItem: function () {

           }
         }
       })
       //.state('editProgram',{
       //  url:'/program/:id/edit',
       //  parent:'index',
       //  views:{
       //    'layoutContainer@index':{
       //      templateUrl:'views/program/program-edit.html',
       //      controller:'ProgramsCtrl'
       //    }
       //  },
       //  resolve:{
       //    programItem :function ($stateParams, program,_,$q) {
       //      //console.log(program);
       //      var programPromise = $q.defer();
       //      program.getData(function(data) {
       //        var Program = _.find(data, function (item) {
       //          return item._id == $stateParams.id;
       //        });
       //        programPromise.resolve(Program);
       //      });
       //
       //      return programPromise.promise;
       //    },
       //    programS: function () {
       //
       //    }
       //  }
       //})
       .state('projects', {
          url: '/projects',
          parent:'index',
          views:{
            'layoutContainer@index':{
              templateUrl: 'views/project/projects.html',
              controller: 'ProjectsCtrl'
            }
          },
         resolve:{
           projectS :function ($stateParams, project,$q) {

             var projectsPromise = $q.defer();
             project.getData(function(data) {
               projectsPromise.resolve(data);
             });

             return projectsPromise.promise;
           },
           projectItem: function () {

           }
         }
       })
       .state('viewProject',{
         url:'/project/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/project/project-view.html',
             controller:'ProjectsCtrl'
           }
         },
         resolve:{
           projectItem :function ($stateParams, project,_,$q) {
             var projectsPromise = $q.defer();
             project.getData(function(data) {
               var Project = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               projectsPromise.resolve(Project);
             });

             return projectsPromise.promise;
           },
           projectS: function () {

           }
         }
       })
       .state('editProject',{
         url:'/project/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/project/project-edit.html',
             controller:'ProjectsCtrl'
           }
         },
         resolve:{
           projectItem :function ($stateParams, project,_,$q) {
             //console.log(program);
             var projectPromise = $q.defer();
             project.getData(function(data) {
               var Project = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               projectPromise.resolve(Project);
             });
             return projectPromise.promise;
           },
           projectS: function () {

           }
         }
       })
       .state('activities', {
        url: '/activities',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/activity/activity.html',
            controller: 'ActivityCtrl'
          }
        },
         resolve:{
           activityS :function ($stateParams, activity,$q) {

             var activitysPromise = $q.defer();
             activity.getData(function(data) {
               activitysPromise.resolve(data);
             });

             return activitysPromise.promise;
           },
           activityItem: function () {

           }
         }
       })
       .state('viewActivity',{
         url:'/activity/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/activity/activity-view.html',
             controller:'ActivityCtrl'
           }
         },
         resolve:{
           activityItem :function ($stateParams, activity,_,$q) {
             var activitysPromise = $q.defer();
             activity.getData(function(data) {
               var Activity = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               activitysPromise.resolve(Activity);
             });

             return activitysPromise.promise;
           },
           activityS: function () {

           }
         }
       })
       .state('editActivity',{
         url:'/activity/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/activity/activity-edit.html',
             controller:'ActivityCtrl'
           }
         },
         resolve:{
           activityItem :function ($stateParams, activity,_,$q) {
             var activitysPromise = $q.defer();
             activity.getData(function(data) {
               var Activity = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               activitysPromise.resolve(Activity);
             });

             return activitysPromise.promise;
           },
           activityS: function () {

           }
         }
       })
       .state('receipts', {
        url: '/receipts',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/receipt/receipts.html',
            controller: 'ReceiptsCtrl'
          }
        },
         resolve:{
           receiptS :function ($stateParams, receipt,$q) {

             var ReceiptsPromise = $q.defer();
             receipt.getData(function(data) {
               ReceiptsPromise.resolve(data);
             });

             return ReceiptsPromise.promise;
           },
           receiptItem: function () {

           }
         }
       })
       .state('viewReceipt',{
         url:'/receipt/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/receipt/receipt-view.html',
             controller:'ReceiptsCtrl'
           }
         },
         resolve:{
           receiptItem :function ($stateParams, receipt,_,$q) {
             var ReceiptsPromise = $q.defer();
             receipt.getData(function(data) {
               var Receipt = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               ReceiptsPromise.resolve(Receipt);
             });

             return ReceiptsPromise.promise;
           },
           receiptS: function () {

           }
         }
       })
       .state('editReceipt',{
         url:'/receipt/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/receipt/receipt-edit.html',
             controller:'ReceiptsCtrl'
           }
         },
         resolve:{
           receiptItem :function ($stateParams, receipt,_,$q) {
             var ReceiptsPromise = $q.defer();
             receipt.getData(function(data) {
               var Receipt = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               ReceiptsPromise.resolve(Receipt);
             });

             return ReceiptsPromise.promise;
           },
           receiptS: function () {

           }
         }
       })
       .state('payments', {
        url: '/payments',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/payment/payments.html',
            controller: 'PaymentsCtrl'
          }
        },
         resolve:{
           paymentS :function ($stateParams, payment,$q) {

             var PaymentsPromise = $q.defer();
             payment.getData(function(data) {
               PaymentsPromise.resolve(data);
             });

             return PaymentsPromise.promise;
           },
           paymentItem: function () {

           }
         }
       })
       .state('viewPayment',{
         url:'/payment/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/payment/payment-view.html',
             controller:'PaymentsCtrl'
           }
         },
         resolve:{
           paymentItem :function ($stateParams, payment,_,$q) {
             var PaymentsPromise = $q.defer();
             payment.getData(function(data) {
               var Payment = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               PaymentsPromise.resolve(Payment);
             });

             return PaymentsPromise.promise;
           },
           paymentS: function () {

           }
         }
       })
       .state('editPayment',{
         url:'/payments/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/payments/payments-edit.html',
             controller:'PaymentsCtrl'
           }
         },
         resolve:{
           paymentItem :function ($stateParams, payment,_,$q) {
             var PaymentsPromise = $q.defer();
             payment.getData(function(data) {
               var Payment = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               PaymentsPromise.resolve(Payment);
             });

             return PaymentsPromise.promise;
           },
           paymentS: function () {

           }
         }
       })
       .state('budgets', {
        url: '/budgets',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/budget/budgets.html',
            controller: 'BudgetsCtrl'
          }
        },
         resolve:{
           budgetS :function ($stateParams, budget,$q) {

             var BudgetsPromise = $q.defer();
             budget.getData(function(data) {
               BudgetsPromise.resolve(data);
             });

             return BudgetsPromise.promise;
           },
           budgetItem: function () {

           }
         }
       })
       .state('viewBudget',{
         url:'/budget/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/budget/budget-view.html',
             controller:'BudgetsCtrl'
           }
         },
         resolve:{
           budgetItem :function ($stateParams, budget,_,$q) {
             var BudgetsPromise = $q.defer();
             budget.getData(function(data) {
               var Budget = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               BudgetsPromise.resolve(Budget);
             });

             return BudgetsPromise.promise;
           },
           budgetS: function () {

           }
         }
       })
       .state('editBudget',{
         url:'/budget/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/budget/budget-edit.html',
             controller:'BudgetsCtrl'
           }
         },
         resolve:{
           budgetItem :function ($stateParams, budget,_,$q) {
             var BudgetsPromise = $q.defer();
             budget.getData(function(data) {
               var Budget = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               BudgetsPromise.resolve(Budget);
             });

             return BudgetsPromise.promise;
           },
           budgetS: function () {

           }
         }
       })
       .state('reports', {
        url: '/reports',
        parent:'index',
        views:{
          'layoutContainer@index':{
            templateUrl: 'views/report/reports.html',
            controller: 'ReportsCtrl'
          }
        },
         resolve:{
           reportS :function ($stateParams, report,$q) {

             var ReportsPromise = $q.defer();
             report.getData(function(data) {
               ReportsPromise.resolve(data);
             });

             return ReportsPromise.promise;
           },
           reportItem: function () {

           }
         }
       })
       .state('viewReport',{
         url:'/report/:id/view',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/report/report-view.html',
             controller:'ReportsCtrl'
           }
         },
         resolve:{
           reportItem :function ($stateParams, report,_,$q) {
             var ReportsPromise = $q.defer();
             report.getData(function(data) {
               var Report = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               ReportsPromise.resolve(Report);
             });

             return ReportsPromise.promise;
           },
           reportS: function () {

           }
         }
       })
       .state('editReport',{
         url:'/report/:id/edit',
         parent:'index',
         views:{
           'layoutContainer@index':{
             templateUrl:'views/report/report-edit.html',
             controller:'ReportsCtrl'
           }
         },
         resolve:{
           reportItem :function ($stateParams, report,_,$q) {
             var ReportsPromise = $q.defer();
             report.getData(function(data) {
               var Report = _.find(data, function (item) {
                 return item._id == $stateParams.id;
               });
               ReportsPromise.resolve(Report);
             });

             return ReportsPromise.promise;
           },
           reportS: function () {

           }
         }
       });
    angular.extend($datepickerProvider.defaults, {
      dateFormat: 'yyyy-MM-dd',
      startWeek: 1
    });
  });

