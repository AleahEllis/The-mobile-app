angular.module('beerApp')
.controller('pairingController', ['$scope', 'recipeService','pairingService', function($scope, recipeService, pairingService) {

	// $scope.recipes = [];
	// $scope.randomRecipe;
	// $scope.ID = [];
	// $scope.randomRecipeID;
	// $scope.recipeLink;

	
	// recipeService.getRecipes()

	// .then(function(response){
	// 	for (var i=0; i<response.data.length; i++){
	// 		$scope.recipes.push(response.data[i].title);
	// 		$scope.ID.push(response.data[i].id); 
	// 	};
		
	// 	var recipeIndex = Math.floor(Math.random() * $scope.recipes.length);
	// 	$scope.randomRecipe = $scope.recipes[recipeIndex];
	// 	$scope.randomRecipeID = $scope.ID[recipeIndex];
	// 	console.log(recipeService.getFlavor());

	// // 	//below is going to take the URL from the call we make with the ID
	// // 	recipeService.getLink($scope.randomRecipeID)

	// 	.then(function(response){
	// 		$scope.recipeLink = (response.data.sourceUrl);
	// 	});
	// });

}]);