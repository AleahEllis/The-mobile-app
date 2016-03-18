angular.module('beerApp')

.factory('recipeService', ['$http', function($http){

	var flavors;

	function setFlavor(flavorList){
		flavors = flavorList;
	}

	function getFlavor() {
		return flavors;
	}

	function getRecipes(flavorList){
		var config = {
			params:{
				"ingredients": flavorList,
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
		getLink    : getLink,
		setFlavor  : setFlavor,
		getFlavor  : getFlavor
	};

}]);