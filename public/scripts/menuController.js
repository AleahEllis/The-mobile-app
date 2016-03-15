angular.module('beerApp', [])
.controller('breweryMenu', ['$scope', function($scope) {
	$scope.breweries = [
		{
			Brewery: 'Atwater Brewery',
			Beers: ['Beer1', 'Beer2']
		},
		{
			Brewery: 'Batch Brewing Company',
			Beers: ['Beer3', 'Beer4']		
		},
		{
			Brewery: 'Brew Detroit',
			Beers: ['Beer5', 'Beer6']		
		},
		{
			Brewery: 'Detroit Beer Company',
			Beers: ['Beer7', 'Beer8']		
		},
		{
			Brewery: 'Motor City Brewing Works',
			Beers: ['Beer9', 'Beer10']		
		}
	];
}]);