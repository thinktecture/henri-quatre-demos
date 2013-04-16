


/* Embedded Fragment - method */

function doSomething($http) {
   if ($http) {
      document.write("Looks good: We received a $http instance");
   } else {
      document.write("Doesn't look that great ...")
   }
}

/* Fragment End - method */
/* Embedded Fragment - injector */

var myInjector = angular.injector(["ng"]);
myInjector.invoke(doSomething);

/* Fragment End - injector */
