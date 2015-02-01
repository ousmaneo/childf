'use strict';

describe('Service: payment', function () {

  // load the service's module
  beforeEach(module('childfundApp'));

  // instantiate service
  var payment;
  beforeEach(inject(function (_payment_) {
    payment = _payment_;
  }));

  it('should do something', function () {
    expect(!!payment).toBe(true);
  });

});
