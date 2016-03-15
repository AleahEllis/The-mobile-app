http://food2fork.com/about/api

angular.module('beerApp', []);

.controller('recipieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "a view";

    // search request
    key: c149f9bfb783bcd836c5dde3bc12d679
    q: flavor
	sort: sort=r

	// The response is json encoded
	// count: Number of recipes in result (Max 30) WE WANT 3 ONLY
	recipes: List of Recipe Parameters ->
	image_url: URL of the image
	source_url: Original Url of the recipe on the publishers site
	f2f_url: Url of the recipe on Food2Fork.com
	title: Title of the recipe
	publisher: Name of the Publisher
	publisher_url: Base url of the publisher
	social_rank: The Social Ranking of the Recipe (As determined by our Ranking Algorithm)
	page: The page number that is being returned (To keep track of concurrent requests)


    function fetch(){
      $http.get("http://food2fork.com/api/search" + $scope.search + "")
      .then(function(response){ $scope.details = response.data; });

      $http.get("" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }

    $scope.update = function(?){
      $scope.search = ?.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });