/* Embedded Fragment - applicationModule */
angular.module("myApplication", ["mySharedElements"]);
/* Fragment End - applicationModule */





/* Embedded Fragment - mySharedElements */
angular.module("mySharedElements", [])
   .directive("myDirective", function () {
      return {
         restrict: "A",
         transclude: true,
         template: "<div style='background-color:red' ng-transclude></div>",
      };
   });
/* Fragment End - mySharedElements */





/* Embedded Fragment - addToApplicationModule */
angular.module("myApplication").controller("DemoController", function () {
   // here comes some controller code ...
});
/* Fragment End - addToApplicationModule */

