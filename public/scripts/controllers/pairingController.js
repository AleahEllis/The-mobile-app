angular.module('beerApp')
.controller('pairingController', ['$scope', 'pairingService', function($scope, pairingService) {
	$scope.breweries = pairingService.breweries;
	$scope.atwater = pairingService.atwater;
	$scope.batch = pairingService.batch;
	$scope.choice2 = pairingService.choice2;
	$scope.selectBeer = pairingService.selectBeer;
}]);