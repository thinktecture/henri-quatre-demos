/* Embedded Fragment - applicationModule */
/*
 PROCESS_HIGHLIGHT
 ["mySharedElements"]
 */
var myApplication = angular.module("myApplication", ["mySharedElements"]);
/* Fragment End - applicationModule */




/* Embedded Fragment - mySharedElements */
var mySharedElements = angular.module("mySharedElements", []);

mySharedElements.directive("myDirective", function () {
   return {
      restrict: "A",
      transclude: true,
      template: "<div style='background-color:red' ng-transclude></div>",
   };
});

/* Fragment End - mySharedElements */

function DemoController() {
}




