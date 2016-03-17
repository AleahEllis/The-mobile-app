angular.module('beerApp')
	.factory('spoonService', ['$http', function($http){
		return{
			get:function(){ //ajax(?) call to api
				return $http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=<required>&number=3&ranking=1");
			},
			create:function(recipeData){//call for recipeData
				return $http.post("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=<required>&number=3&ranking=1", recipeData);
			},
			 delete: function(id){
                return $http.delete("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=<required>&number=3&ranking=1"+id);
            }
		};
	}])


// angular.module('beerApp')
// 	.controller('recipeController', function($scope, $location, $http){
// 		$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=<required>&number=3&ranking=1")
// 		// .header("X-Mashape-Key", "Ae6oX6OgLBmsh87xZW56z2AdA3Z8p1IWFf2jsngj2S7si3ElSe")
// 		// .header("Accept", "application/json")
// 		// .end(function (result){
// 		// 	return result
// 		// })
// 		// console.log(result)
// 	});

