angular.module('beerApp')
.controller('mainController', ['$scope', 'pairingService','recipeService', function($scope, pairingService, recipeService){
	$scope.breweries    = pairingService.breweries;
	$scope.atwater      = pairingService.atwater;
	$scope.batch        = pairingService.batch;
	$scope.beerChoice   = pairingService.beerChoice;
	$scope.sbIndex      = pairingService.sbIndex;
	$scope.recipes;
	$scope.ID;
	$scope.randomRecipe;
	$scope.randomRecipeID;
	$scope.recipeLink;

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
		document.getElementById('beerInfo').style.display = 'block';
		var flavors = recipeService.getFlavor();
		recipeService.getRecipes(flavors)
		.then(function(response){
			$scope.recipes = [];
			$scope.ID = [];
			for (var i=0; i<response.data.length; i++){
				$scope.recipes.push(response.data[i].title);
				$scope.ID.push(response.data[i].id); 
			};
			
			//This chooses a random recipe and correspinding ID
			var recipeIndex = Math.floor(Math.random() * $scope.recipes.length);
			$scope.randomRecipe = $scope.recipes[recipeIndex];
			$scope.randomRecipeID = $scope.ID[recipeIndex];

			//below is going to take the URL from the call we make with the ID
			recipeService.getLink($scope.ID)

			.then(function(response){
				$scope.recipeLink = (response.data.sourceUrl);
			});
		});
	};

}]);