'use strict';

/**
 * @ngdoc service
 * @name childfundApp.budget
 * @description
 * # budget
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('budget', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://progam endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });

    // Public API here
    return $resource('scripts/services/budget.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
