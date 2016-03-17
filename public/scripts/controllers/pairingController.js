var app = angular.module('beerApp')
app.controller('pairingController', ['$scope', 'pairingService', function($scope, pairingService) {
	$scope.breweries  = pairingService.breweries;
	$scope.atwater    = pairingService.atwater;
	$scope.batch      = pairingService.batch;
	$scope.choice2    = pairingService.choice2;
	$scope.selectBeer = pairingService.selectBeer;
	$scope.selectedBeer = pairingService.selectedBeer;
	$scope.usersBeerChoice = pairingService.usersBeerChoice;
	$scope.sbIndex = pairingService.sbIndex;
}]);

// app.directive('pairingDirective', function() {
// 	return {
// 		templateUrl: 'views/pairing.html'
// 	};
// });