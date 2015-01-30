'use strict';

describe('Service: program', function () {

  // load the service's module
  beforeEach(module('childfundApp'));

  // instantiate service
  var program;
  beforeEach(inject(function (_program_) {
    program = _program_;
  }));

  it('should do something', function () {
    expect(!!program).toBe(true);
  });

});
