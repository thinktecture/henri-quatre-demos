/* Embedded Fragment - controller */

var demoModule = angular.module("demo", []);

function DemoController($scope) {
   $scope.tryThis = function () {
      alert("We're in the controller-provided function")
   }
}
/* Fragment End - controller */





/* Embedded Fragment - provider */


/* Fragment End - provider */
