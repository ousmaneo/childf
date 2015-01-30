'use strict';

/**
 * @ngdoc service
 * @name childfundApp.project
 * @description
 * # project
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('project', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://project endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });    

    // Public API here
    return $resource('scripts/services/project.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
