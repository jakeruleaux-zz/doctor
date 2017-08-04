var apiKey = require('./../.env').apiKey;
console.log(apiKey);
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(doctorArray) {
  console.log(listDoctors);
  // console.log(doctorArray);
$('#doctor').append(doctorArray);
};

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
// console.log(medicalIssue);
  var newDoctor = new Doctor(medicalIssue);

  newDoctor.getDoctors(listDoctors);
});
