'use strict';

/**
 * @ngdoc service
 * @name childfundApp.report
 * @description
 * # report
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('report', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://progam endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });

    // Public API here
    return $resource('scripts/services/report.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
