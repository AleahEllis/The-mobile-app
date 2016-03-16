angular.module('beerApp', []);

app.controller("recepieCtrl", function($scope, $http) {
  $http.get('data/posts.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    })
    .error(function(data, status, headers, config) {
      // log error
    });
});

// in the html-probs the view
// <body ng-app="beerApp">
//   <div ng-controller="recepieCtrl">
//     <ul ng-repeat="post in posts">
//       <li>{{post.title}}</li>
//     </ul>
//   </div>
// </body>
