/* Embedded Fragment - provider */

var demoModule = angular.module("demo", []);

demoModule.factory("$http", function ($q) {
   return {
      jsonp: function () {
         alert("This is our replacement function");

         var dummyResponse = {data: { postalcodes: [
            {placeName: "Testing"}
         ]}};


         var deferred = $q.defer();
         deferred.resolve(dummyResponse);
         return deferred.promise;
      }
   }
});


/* Fragment End - provider */


function DemoController($scope, $http) {
   $scope.query = {
      postalCode: "97845",
      countryCode: "DE"
   };

   $scope.lookupResult = {
      displayValue: "Not yet retrieved"
   };

   $scope.performPostcodeLookup = function () {
      var url = "http://api.geonames.org/postalCodeLookupJSON?" +
         "postalcode=" + $scope.query.postalCode +
         "&country=" + $scope.query.countryCode +
         "&username=henriquatre" +
         "&callback=JSON_CALLBACK";

      $http.jsonp(url).then(function (response) {
         var data = response.data;
         if (data.status) {
            $scope.lookupResult.displayValue = "Error: " + data.status.message;
         } else {
            if (data.postalcodes.length === 0) {
               $scope.lookupResult.displayValue = "No data found";
            } else {
               $scope.lookupResult.displayValue = data.postalcodes[0].placeName;
            }
         }
      }, function (data, status) {
         $scope.lookupResult.displayValue = "HTTP Error - " + status;
      });
   }

}
