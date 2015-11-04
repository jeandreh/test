'use strict';

describe('Directive: productBoards', function () {

  // load the directive's module
  beforeEach(module('cloudPosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-boards></product-boards>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productBoards directive');
  }));
});
