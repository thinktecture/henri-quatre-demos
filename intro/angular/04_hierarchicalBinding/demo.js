/* Embedded Fragment - userDefinition */
function User(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;

   this.getFullName = function () {
      return this.firstName + " " + this.lastName;
   }
}
/* Fragment End - userDefinition */

/* Embedded Fragment - controller */
/*
 PROCESS_HIGHLIGHT
 $scope.selectUser
 $scope.currentUser
 */
function UserController($scope) {
   $scope.userList = [
      new User("John", "Doe"),
      new User("Henri", "de Bourbon"),
      new User("Marguerite", "de Valois"),
      new User("Gabrielle", "d'Estrées")
   ];

   // select the first user of the list
   $scope.currentUser = $scope.userList[0];

   // expose a callable method to the view
   $scope.selectUser = function (user) {
      $scope.currentUser = user;
   }
}
/* Fragment End - controller */
