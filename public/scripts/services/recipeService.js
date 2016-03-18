var app = angular.module('beerApp');

app.factory('recipeService', ['$http', function($http){

	var pushIngredients = function(ingredient){
	return params.push(ingredients);
	//How can I get the ingredients?
	};
	function getRecipes(){
		var config = {
			params:{
				"ingredients": "grapefriut,rosemary,pepper" ,
				"number": 3
			},
			headers:{
				"X-Mashape-Key": "vZ9WxL4aNXmshyMrjTgnMDIq9g2Rp18Q3i8jsn4fyTzUkdG9Vg"
			}
		};
		return $http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', config);


	};

	// below is the function to get the links. 
	
	function getLink(randomRecipeID){
		var configLink = {
			headers:{
				"X-Mashape-Key": "vZ9WxL4aNXmshyMrjTgnMDIq9g2Rp18Q3i8jsn4fyTzUkdG9Vg"

			}
		};

		return $http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+randomRecipeID+'/information', configLink);
	}


	return {
		getRecipes : getRecipes,
		getLink : getLink
	};






}]);
	