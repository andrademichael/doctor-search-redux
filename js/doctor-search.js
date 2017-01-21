var apiKey = require('./../.env').apiKey;

function Doctor() {
}

//getDoctors method returns an array of doctor objects
Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&skip=0&limit=20&specialty_uid=' + medicalIssue + '&user_key=' + apiKey)
  //success branch
  .then(function(response) {
    //parse result
    var parsedResponse = JSON.parse(response);
    console.log("API call returned: " + response + ", which was then parsed into: " + parsedResponse);
    //populate doctors array by looping through result's data objects
    var doctors = [];
    parsedResponse.data.forEach(function(doctor) {
      doctors.push(doctor);
    });
    displayFunction(doctors);
  })
  //failure branch
  .fail(function(error) {
    displayFunction(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
