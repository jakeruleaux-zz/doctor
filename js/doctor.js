var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  // this.doctorsName = doctorsName;
  this.medicalIssue = medicalIssue;
  // console.log(medicalIssue);
}


Doctor.prototype.getDoctors = function(medicalIssue, listDoctors) {
  // var medicalIssue = this.medicalIssue;

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(response);
     return response;
    })
   .fail(function(error){
      console.log("fail");
    });
};

// Doctor.prototype.doctorsNames = function() {
//   var allDoctors = [];
//   console.log(allDoctors);
//   var medicalIssue = this.medicalIssue;
//     response.then(function(response) {
//     for (i = 0; i < medicalIssue; i++) {
//       var listofdoctors = response[i].join(" ");
//       listDoctors(listofdoctors);
//     }
//     })
//     .fail(function(error) {
//       $("#output").text(error.responseJSON.message);
//     });
// };




exports.doctorModule = Doctor;



// 08b0839620e548c802aa07e96f29fb1c
