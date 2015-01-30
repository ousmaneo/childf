'use strict';

/**
 * @ngdoc service
 * @name childfundApp.program
 * @description
 * # program
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('program', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://progam endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });    

    // Public API here
    return $resource('scripts/services/program.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
