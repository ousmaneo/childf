'use strict';

describe('Service: receipt', function () {

  // load the service's module
  beforeEach(module('childfundApp'));

  // instantiate service
  var receipt;
  beforeEach(inject(function (_receipt_) {
    receipt = _receipt_;
  }));

  it('should do something', function () {
    expect(!!receipt).toBe(true);
  });

});
