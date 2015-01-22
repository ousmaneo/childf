'use strict';

describe('Directive: widgetHeader', function () {

  // load the directive's module
  beforeEach(module('childfundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<widget-header></widget-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the widgetHeader directive');
  }));
});
