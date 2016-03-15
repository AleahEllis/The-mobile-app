var app=angular.module('beerApp');
	app.controller('beerListCont',['$scope', 'beerListService', function($scope, beerListService){
		beerListService.then(function(response){

			$scope.showBeer=response.data;

		});
		
	}]);
