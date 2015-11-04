'use strict';

describe('Service: productSvc', function () {

  // load the service's module
  beforeEach(module('cloudPosApp'));

  // instantiate service
  var productSvc;
  beforeEach(inject(function (_productSvc_) {
    productSvc = _productSvc_;
  }));

  it('should do something', function () {
    expect(!!productSvc).toBe(true);
  });

});
