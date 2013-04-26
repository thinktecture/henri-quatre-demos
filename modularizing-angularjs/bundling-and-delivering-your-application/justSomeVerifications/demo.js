

var app = angular.module("myApplication", []);

app.directive("", function() {
   return {
      restrict: "E",
      templateUrl: "list.html"
   }
});