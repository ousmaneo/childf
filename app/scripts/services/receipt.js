'use strict';

/**
 * @ngdoc service
 * @name childfundApp.receipt
 * @description
 * # receipt
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('receipt', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://progam endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });

    // Public API here
    return $resource('scripts/services/receipt.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
