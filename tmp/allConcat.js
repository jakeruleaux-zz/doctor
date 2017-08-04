var Doctor = require('./../js/doctor.js').doctorModule;
// var apiKey = require('./../.env').apiKey;

// var listDoctors = function(result) {
// };

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
  // console.log(medicalIssue);
  var doctor = new Doctor(medicalIssue);
  // doctor.getDoctors();
  // $('#doctor').append(result);
  // doctor.getDoctors(listDoctors);
});
