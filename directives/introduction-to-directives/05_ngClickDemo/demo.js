angular.module("myApp", []);

function SumController($scope) {
   $scope.someData = {
      sum: 42
   };

   $scope.increment = function (valueToAdd) {
      $scope.someData.sum = $scope.someData.sum + valueToAdd;
   }
}