var app = angular.module('beerApp')
app.controller('pairingController', ['$scope', 'pairingService', function($scope, pairingService) {

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


	$scope.selectedBeer = pairingService.selectedBeer;
	$scope.usersBeerChoice = pairingService.usersBeerChoice;
	$scope.sbIndex = pairingService.sbIndex;
}]);

// app.directive('pairingDirective', function() {
// 	return {
// 		templateUrl: 'views/pairing.html'
// 	};
// });

