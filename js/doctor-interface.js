var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, docData) {
  console.log(docData);
$('#doctor').text(medicalIssue + docData + "hi");
};

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
  var newDoctor = new Doctor(medicalIssue);

  newDoctor.getDoctors(medicalIssue, listDoctors);
});
