$(function () {
   var user = {
      dateOfBirth: new Date(1970, 0, 1)
   };

   var displayValue = function () {
      $("#dateOfBirthDisplay").text(new Date(user.dateOfBirth).toDateString());
   };

   var processChange = function() {
      user.dateOfBirth = $("#dateOfBirth").datepicker("getDate");
      displayValue();
   };

   $("#dateOfBirth").datepicker({
         inline: true,
         onClose: processChange,
         onSelect: processChange
      }
   );

   displayValue();

   // initial display of value in input-box
   $("#dateOfBirth").datepicker("setDate", user.dateOfBirth);

});