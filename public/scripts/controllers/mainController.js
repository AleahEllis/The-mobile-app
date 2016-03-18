angular.module('beerApp')
.controller('mainController', ['$scope', 'pairingService','recipeService', function($scope, pairingService, recipeService){
	$scope.breweries    = pairingService.breweries;
	$scope.atwater      = pairingService.atwater;
	$scope.batch        = pairingService.batch;
	$scope.beerChoice      = pairingService.beerChoice;
	$scope.sbIndex      = pairingService.sbIndex;

	// stores the beers for a chosen brewery in an array
	// populates the second dropdown with the names of said beers
	$scope.selectBrewery = function(breweryChoice){
		$scope.beers = pairingService.selectBrewery(breweryChoice);
	};

	// returns beer object based on choice of beer
	$scope.selectBeer = function(beerChoice){
		$scope.beer = beerChoice; //the beer is important for getting the flavors in the api call, recipie service.js
		recipeService.setFlavor($scope.beer.Flavor);
		console.log(recipeService.getFlavor());
	};

	// waits until beer has been selected to show partial view
	$scope.showBeerInfo = function(){
		document.getElementById('beerInfo').style.display = 'block';
		var blah = recipeService.getFlavor();
		console.log(recipeService.getRecipes(blah));
	};

}]);

//manually injected the 
// pairingController.$inject=['$scope','pairingService','recipeService'];
// mainController.$inject=['$scope','pairingService','recipeService'];