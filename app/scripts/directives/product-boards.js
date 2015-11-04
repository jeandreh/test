'use strict';

/**
 * @ngdoc directive
 * @name cloudPosApp.directive:productBoards
 * @description
 * # productBoards
 */
angular.module('cloudPosApp')
  .directive('productBoards', function () {
 	return {
 		restrict: 'E',
 		templateUrl:'views/templates/product-boards.html',
  		link: function($scope) {	
 		//	$scope.products = productSvc.products();
 			$scope.currentTab = 0;
 			
 			$scope.isSelected = function (tab) {
 				return $scope.currentTab === tab;
 			};
 			
 			$scope.setCurrentTab = function (tab) {
 				$scope.currentTab = tab;
 			};
 			
 			$scope.addProduct = function (prod) {
 				$scope.itemList.addItem(prod);
 			};
 		}
 	};
  });