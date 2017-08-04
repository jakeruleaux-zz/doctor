var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(doctorArray) {
  console.log(doctorArray);
$('#doctor').text(doctorArray);
};

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
  var newDoctor = new Doctor(medicalIssue);

  newDoctor.getDoctors(medicalIssue, listDoctors);
});
