/* Embedded Fragment - provider */
/*
 PROCESS_HIGHLIGHT
 demoModule.factory("userProfile"
 */
var demoModule = angular.module("demo", []);

demoModule.factory("userProfile", function () {
   // return a hardcoded profile for this example
   return {
      defaultPostalCode: "12345",
      defaultCountryCode: "US"
   }
});

/* Fragment End - provider */






/* Embedded Fragment - controller */
/*
 PROCESS_HIGHLIGHT
 userProfile.defaultPostalCode
 userProfile.defaultCountryCode
 userProfile
 */

function DemoController($scope, $http, userProfile) {
   $scope.query = {
      postalCode: userProfile.defaultPostalCode,
      countryCode: userProfile.defaultCountryCode
   };

   $scope.lookupResult = {
      displayValue: "Not yet retrieved"
   };

   $scope.performPostcodeLookup = function () {
      $scope.lookupResult.displayValue = "Just a demo.";
   }
}
/* Fragment End - controller */