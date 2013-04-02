var module = angular.module("myApp", []);

module.directive("myConfirmClick", function ($parse) {
   return {
      restrict: 'A',
      link: function (scope, element, attrs) {
         var parsed = $parse(attrs.myConfirmClick);
         element.bind("click", function () {
            scope.$apply(function(){
               parsed(scope);
            });
         });
      }
   }
});


function SumController($scope) {
   $scope.someData = {
      sum: 42
   };

   $scope.increment = function (valueToAdd) {
      $scope.someData.sum = $scope.someData.sum + valueToAdd;
   }
}

