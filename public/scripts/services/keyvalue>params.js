angular.module('beerApp')

.service('keyValueService', function($scope, pairingService) {
    var stringValue = 'choice2';//the beer type that was chosen
    var flavorObject = { //the 3 flavors that correspond to the chosen beer
        data.flavor: [0,1,2]
        console.log(flavorObject)
    };
    
//     return {
//         getString: function() {
//             return stringValue;
//         },
//         setString: function(value) {
//             stringValue = value;
//         },
//         getObject: function() {
//             return flavorObject;
//         }
//     }
// });



// app.controller('assignvalCont', function($scope, $timeout, keyValueService) {
//     $scope.stringValue = keyValueService.getString();
//     $scope.flavorObject = keyValueService.getObject().data;    
// });

