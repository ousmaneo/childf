'use strict';

describe('Controller: BudgetsCtrl', function () {

  // load the controller's module
  beforeEach(module('childfundApp'));

  var BudgetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BudgetsCtrl = $controller('BudgetsCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
