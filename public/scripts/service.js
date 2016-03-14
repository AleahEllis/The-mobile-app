var app=angular.module('beerApp',[]);
 app.factory('beerListSevice', function($http){
 	return $http.get('/api/beerList');

 });