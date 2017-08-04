var Doctor = require('./../js/doctor.js').doctorModule;

$(document).submit(function(event) {
  event.preventDefault();

  var userInput = $("#input").val();
  var doctor = new Doctor(userInput);
});
