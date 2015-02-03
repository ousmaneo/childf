'use strict';

/**
 * @ngdoc service
 * @name childfundApp.account
 * @description
 * # account
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('account', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://account endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });

    // Public API here
    return $resource('scripts/services/account.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
