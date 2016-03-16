
angular.module('beerApp')

.controller('recipeController', function($scope, $location, $http){

$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=<required>&number=3&ranking=1")
.header("X-Mashape-Key", "Ae6oX6OgLBmsh87xZW56z2AdA3Z8p1IWFf2jsngj2S7si3ElSe")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result);
});