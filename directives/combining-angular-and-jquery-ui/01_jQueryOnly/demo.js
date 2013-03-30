$(function () {
   var user = {
      dateOfBirth: new Date(1970, 0, 1)
   };

   var displayValue = function () {
      $("#dateOfBirthDisplay").text(user.dateOfBirth);
   };

   var processChange = function() {
      user.dateOfBirth = $("#dateOfBirth").datepicker("getDate");
      displayValue();
   };

   $("#dateOfBirth").datepicker({
         inline: true,
         dateFormat: 'dd.mm.yy',
         onClose: processChange,
         onSelect: processChange
      }
   );

   displayValue();

});