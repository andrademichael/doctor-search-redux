var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

//getDoctors method returns an array of doctor objects
Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

  //success branch
  .then(function(result) {
    //parse result
    // var parsedResult = JSON.parse(result);
 result.data[0].profile.first_name);
    //populate doctors array by looping through result's data objects
    var doctors = [];
    result.data.forEach(function(doctor) {
      doctors.push(doctor);
    });
    displayFunction(medicalIssue, doctors);
  })

  //failure branch
  .fail(function(error) {
    displayFunction(error.message);
  });
};

exports.doctorModule = Doctor;
