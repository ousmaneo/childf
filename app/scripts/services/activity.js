'use strict';

/**
 * @ngdoc service
 * @name childfundApp.activity
 * @description
 * # activity
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('activity', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://activity endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });    

    // Public API here
    return $resource('scripts/services/activity.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
