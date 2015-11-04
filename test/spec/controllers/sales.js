'use strict';

describe('Controller: SalesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudPosApp'));

  var SalesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalesctrlCtrl = $controller('SalesctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
