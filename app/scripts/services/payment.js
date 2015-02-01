'use strict';

/**
 * @ngdoc service
 * @name childfundApp.payment
 * @description
 * # payment
 * Factory in the childfundApp.
 */
angular.module('childfundApp')
  .factory('payment', function ($resource) {
    // Service logic
    // ...
    // return $resource('http://progam endpoint', { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });

    // Public API here
    return $resource('scripts/services/payment.json',{}, {
      getData :{ method:'GET', isArray:true}
    });
  });
