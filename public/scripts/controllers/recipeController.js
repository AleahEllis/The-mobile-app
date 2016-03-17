var app = angular.module('beerApp', ['ngRoute']);

app.controller('recipeController', ['$scope', 'recipeService', function($scope, recipeService){

	var recipes = recipeService.getRecipes();
	console.log(recipes);
}])