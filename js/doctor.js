// var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  // this.doctorsName = doctorsName;
  this.medicalIssue = medicalIssue;
}


exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=7947c18e61479f13d8a634bf57d69a68')
   .then(function(result) {
     var doctors = result;
     console.log("hi");
    })
   .fail(function(error){
      console.log("fail");
    });
};




exports.doctorModule = Doctor;
