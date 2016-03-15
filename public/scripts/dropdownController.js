angular.module('beerApp', [])
.controller('dropdownController', function() {
	
	var menu = this;
	
	menu.beersByBrewery = [
		{
			Brewery: 'Atwater Brewery',
			Beers: ['Grand Circus IPA', 'Hop-A-Peel']
		},
		{
			Brewery: 'Batch Brewing Company',
			Beers: ['Batch1', 'Batch1']		
		},
		{
			Brewery: 'Brew Detroit',
			Beers: ['Brew1', 'Brew2']		
		},
		{
			Brewery: 'Detroit Beer Company',
			Beers: ['DBC1', 'DBC2']		
		},
		{
			Brewery: 'Motor City Brewing Works',
			Beers: ['MCBW1', 'MCBW2']		
		}
	];

	// var beerList = $scope.breweries[0].Beers;
	// for (var i = 0; i < beerList.length; i++) {
	// 	console.log(beerList[i]);
	// }
});