angular.module('beerApp')
.controller('mainController', ['$scope', 'pairingService', function($scope, pairingService){
	$scope.breweries    = pairingService.breweries;
	$scope.atwater      = pairingService.atwater;
	$scope.batch        = pairingService.batch;
	$scope.beerChoice      = pairingService.beerChoice;
	$scope.sbIndex      = pairingService.sbIndex;

	// stores the beers for a chosen brewery in an array
	// populates the second dropdown with the names of said beers
	$scope.selectBrewery = function(breweryChoice){
		$scope.beers = pairingService.selectBrewery(breweryChoice);
	};

	// returns beer object based on choice of beer
	$scope.selectBeer = function(beerChoice){
		$scope.beer = beerChoice;
	};

	// waits until beer has been selected to show partial view
	$scope.showBeerInfo = function(){
		document.getElementById('beerInfo').style.display = 'block';
	};

}]);