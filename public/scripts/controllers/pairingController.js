angular.module('beerApp')
.controller('pairingController', ['$scope','recipeService', 'pairingService', function($scope, recipeService, pairingService) {
	$scope.breweries  = pairingService.breweries;
	$scope.atwater    = pairingService.atwater;
	$scope.batch      = pairingService.batch;
	$scope.choice2    = pairingService.choice2;
	$scope.selectBeer = pairingService.selectBeer;

	$scope.recipes = [];
	// $scope.randomRecipe;

	recipeService.getRecipes()

	.then(function(response){
		for (var i=0; i<response.data.length; i++){
			$scope.recipes.push(response.data[i].title);
		};

		// var getRandomRecipe = function(){
		// 	var recipeIndex = Math.floor(Math.random() * $scope.recipes.length);
		// 	$scope.randomRecipe = $scope.recipes[recipeIndex];
		// };

		console.log(response);
	})

	// gets the ID for all the recipes. NOT tested yet
	// .then(function(response){
	// 	for (var i=0; i<response.data.length; i++){
	// 		$scope.recipes.push(response.data[i].ID);
	// 	};
		
	// })



	
}]);

