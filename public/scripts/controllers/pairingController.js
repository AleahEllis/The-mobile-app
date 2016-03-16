angular.module('beerApp')
.controller('pairingController', ['$scope', 'pairingService', function($scope, pairingService) {
	$scope.breweries = pairingService.breweries;
	$scope.atwater = pairingService.atwater;
	$scope.batch = pairingService.batch;
}]);