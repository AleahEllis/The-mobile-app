angular.module('beerApp')
.controller('mainController', ['$scope', 'pairingService', function($scope, pairingService){
	$scope.breweries    = pairingService.breweries;
	$scope.atwater      = pairingService.atwater;
	$scope.batch        = pairingService.batch;
	$scope.choice2      = pairingService.choice2;
	$scope.selectedBeer = pairingService.selectedBeer;
	$scope.sbIndex      = pairingService.sbIndex;

	// stores the beers for a chosen brewery in an array
	// populates the second dropdown with the names of said beers
	$scope.selectBeer = function(choice1){
		$scope.beers = pairingService.selectBeer(choice1);
	};

	// returns beer object based on choice of beer
	$scope.saveBeerInfo = function(choice2){
		$scope.beer = choice2;
	};

}]);