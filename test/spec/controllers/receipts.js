'use strict';

describe('Controller: ReceiptsCtrl', function () {

  // load the controller's module
  beforeEach(module('childfundApp'));

  var ReceiptsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiptsCtrl = $controller('ReceiptsCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
