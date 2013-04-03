/* Embedded Fragment - directive */
var module = angular.module("myApp", []);

module.directive("myConfirmClick", function ($parse) {
   return {
      restrict: 'A',
      link: function (scope, element, attrs) {
         var parsed = $parse(attrs.myConfirmClick);
         element.bind("click", function () {
             alert("Handling the click!");
             scope.$apply(function(){
               parsed(scope);
            });
         });
      }
   }
});
/* Fragment End - directive */


function SumController($scope) {
   $scope.someData = {
      sum: 42
   };

   $scope.increment = function (valueToAdd) {
      $scope.someData.sum = $scope.someData.sum + valueToAdd;
   }
}

