angular.module('beerApp')
.controller('mainController', ['$scope', 'pairingService','recipeService', function($scope, pairingService, recipeService){
	$scope.breweries    = pairingService.breweries;
	$scope.atwater      = pairingService.atwater;
	$scope.batch        = pairingService.batch;
	$scope.brew         = pairingService.brew;
	$scope.dbc          = pairingService.dbc;
	$scope.mcbw         = pairingService.mcbw;
	$scope.beerChoice   = pairingService.beerChoice;
	$scope.sbIndex      = pairingService.sbIndex;

	$scope.recipeArray;

	// stores the beers for a chosen brewery in an array
	// populates the second dropdown with the names of said beers
	$scope.selectBrewery = function(breweryChoice){
		$scope.beers = pairingService.selectBrewery(breweryChoice);
	};

	// returns beer object based on choice of beer
	$scope.selectBeer = function(beerChoice){
		$scope.beer = beerChoice; //the beer is important for getting the flavors in the api call, recipie service.js
		recipeService.setFlavor($scope.beer.Flavor);
	};

	// waits until beer has been selected to show partial view
	// then kicks off getRecipes function
	$scope.showBeerInfo = function(){
		var showBox = document.getElementById('beerInfo');
		showBox.style.display = 'block';
		var flavors = recipeService.getFlavor();
		recipeService.getRecipes(flavors)
		.then(function(response){
			$scope.recipeArray = new Array();
			for (var i=0; i<response.data.length; i++){
				$scope.recipeArray.push({
					"title": response.data[i].title, 
					"ID": response.data[i].id,
					"url": ''
				});
			};

			$scope.recipeArray.forEach(function(recipe) {
				recipeService.getLink(recipe.ID)
				.then(function(response){
					recipe.url = response.data.sourceUrl;
				});
			});

		});
	};

	// hides beer info when no beer is selected
	$scope.hideBeerInfo = function() {
		document.getElementById('beerInfo').style.display = 'none';
	};

}]);