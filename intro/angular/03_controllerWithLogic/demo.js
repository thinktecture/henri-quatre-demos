

function UserController($scope) {

   $scope.currentUser = {
      firstName: "John",
      lastName: "Doe"
   };

   $scope.getFullName = function() {
      return $scope.currentUser.firstN + " " + $scope.currentUser.lastName;
   };
}