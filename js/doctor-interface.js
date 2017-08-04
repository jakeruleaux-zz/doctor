$(document).submit(function(event) {
  event.preventDefault();

  var userInput = $("#input").val();
  var doctor = new Doctor(userInput);
});
