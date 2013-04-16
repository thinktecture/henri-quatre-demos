/* Embedded Fragment - controller */

var demoModule = angular.module("demo", []);

function DemoController($scope) {
   $scope.tryThis = function () {
      alert("We're in the controller-provided function")
   }
}
/* Fragment End - controller */





/* Embedded Fragment - directive */

demoModule.directive("ngClick", function () {
   return {
      priority: 1,
      restrict: 'A',
      terminal: true,
      link: function (scope, element, attrs) {
         element.bind("click", function(){
            alert("This is the replacement directive.")
         });
      }
   }
});

/* Fragment End - directive */
