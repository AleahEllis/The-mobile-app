var app = angular.module('beerApp')
app.controller('pairingController', ['$scope', 'recipeService','pairingService', function($scope, recipeService, pairingService) {

	$scope.breweries  = pairingService.breweries;
	$scope.atwater    = pairingService.atwater;
	$scope.batch      = pairingService.batch;
	$scope.choice2    = pairingService.choice2;
	$scope.selectBeer = pairingService.selectBeer;
	$scope.selectedBeer = pairingService.selectedBeer;
	$scope.usersBeerChoice = pairingService.usersBeerChoice;
	$scope.sbIndex = pairingService.sbIndex;


// app.directive('pairingDirective', function() {
// 	return {
// 		templateUrl: 'views/pairing.html'
// 	};
// });


	$scope.recipes = [];
	$scope.randomRecipe;
	$scope.ID = [];

	recipeService.getRecipes()

	.then(function(response){
		for (var i=0; i<response.data.length; i++){
			$scope.recipes.push(response.data[i].title);
			// $scope.ID.push(response.data[i].ID); 
			//Not sure if ID is the correct name 
		};

		
		var recipeIndex = Math.floor(Math.random() * $scope.recipes.length);
		$scope.randomRecipe = $scope.recipes[recipeIndex];
	

		console.log(response);
		console.log($scope.randomRecipe);
	})




	
}]);




