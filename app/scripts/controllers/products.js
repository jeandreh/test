'use strict';

/**
 * @ngdoc function
 * @name cloudPosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cloudPosApp
 */
angular.module('cloudPosApp')
  .controller('ProductsCtrl', function ($scope, $modal) {

    $scope.categories = [
	    { name: 'Hot Drinks', ticked: false },
	    { name: 'Cold Drinks', ticked: false }, 
	    { name: 'Pastry', ticked: false },
	    { name: 'Favorites', ticked: false }
	];

	$scope.ingredients = [
	    { name: 'Coffee', ticked: true },
	    { name: 'Milk', ticked: true},
	    { name: 'Suggar', ticked: true },
	    { name: 'Chocolate Powder', ticked: false }
	];

    $scope.salesOptions = [
        { 
            name: 'Small', 
            description: 'Small 50ml Coffee',
            cost: '1.00',
            price: '2.00',
            composition: ['0.2', '0.1', '0.2']
        }
    ];

	$scope.categoriesLocalLang = {
	    selectAll       : 'Select All',
	    selectNone      : 'Clear All',
	    reset           : 'Reset',
	    search          : 'Search...',
	    nothingSelected : 'Categories...'
	};

	$scope.ingredientsLocalLang = {
	    selectAll       : 'Select All',
	    selectNone      : 'Clear All',
	    reset           : 'Reset',
	    search          : 'Search...',
	    nothingSelected : 'Ingredients...'
	};

	$scope.selectedIngredients = [];

	var ingredientModal = $modal({
        scope: $scope,
        templateUrl: 'views/templates/ingredient-modal.html',
        show: false
    });

    var optionModal = $modal({
        scope: $scope,
        templateUrl: 'views/templates/option-modal.html',
        show: false
    });

    function saveSelectedIngredients() {
    	for (var i = 0; i < $scope.selectedIngredients.length; i++) {
    		var tempIngredient = $scope.selectedIngredients[i];
    		for (var j = 0; j < $scope.ingredients.length; j++) {
    			if (tempIngredient.name === $scope.ingredients[j].name) {
    				$scope.ingredients[j].ticked = true;
    			}
    		}
    	}
    }

    function isExistent(ingred) {
    	var order = 0; // non existent
    	for (var i = 0; i < $scope.ingredients.length; i++) {
    		if ($scope.ingredients[i].name === ingred.name) {
    			order = i + 1; // order of the ingredient in the list
    		}
    	}
    	return order;
    }

    $scope.showIngredientModal = function () {
    	saveSelectedIngredients();
    	ingredientModal.$promise.then(ingredientModal.show);
    };

    $scope.showOptionModal = function () {
    	saveSelectedIngredients();
        optionModal.$promise.then(optionModal.show);
    };

    $scope.deselectIngredient = function (index, ingred) {
		$scope.selectedIngredients.splice(index,1);
		var order = isExistent(ingred);
		if (order) {
			$scope.ingredients[order - 1].ticked = false;
		}
		saveSelectedIngredients();
    };

    $scope.addIngredient = function (ingred) {
        if (!isExistent(ingred)) {
            // add ingredient to ingredients list
            ingred.ticked = true;
            $scope.ingredients.push(ingred);
            // hide modal
            ingredientModal.hide();
        }
        else {
            // TODO error message
        }   
    };

    $scope.addOption = function (option) {
        $scope.salesOptions.push(option);
    	// hide modal
    	ingredientModal.hide();	
    };

  });
