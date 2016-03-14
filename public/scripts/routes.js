app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/beerRec.html',
      controller: ''
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: ''
    })
    .when('/beerList', {
      templateUrl: '/views/beerList.html',
      controller: ''
    })
    .when('/localBrews', {
      templateUrl: '/views/localBrews.html',
      controller: ''
    })
    .otherwise({ 
      redirectTo: '/'
    });
});