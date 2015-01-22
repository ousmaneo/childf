'use strict';

describe('Directive: cdLoading', function () {

  // load the directive's module
  beforeEach(module('childfundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cd-loading></cd-loading>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cdLoading directive');
  }));
});
