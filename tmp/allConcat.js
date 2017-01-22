var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = (function(specialty, results) {
  specialty = specialty.charAt().toUpperCase() + specialty.slice(1);
  $("#doctorsListHeader").prepend(specialty + " ");
  results.forEach(function(result) {
    var practices = "";
    result.practices.forEach(function(practice) {
      practices = practices + ("<p>" + practice.name + "</p>");
    });
    $("#doctorsList").append(
      "<li><strong>" +  result.profile.first_name +
      " " + result.profile.last_name + ", " +
      "</strong><br>" + result.profile.bio +
      "<br><p>Practices at: <strong>" +
      practices + "</strong></li><br>"
    );
  });
});

//event handlers
$(function() {
  var currentSearch = new Doctor();
  $("#doctorSearchForm").submit(function(event) {
    event.preventDefault();
    var conditionName = $("#specialtyInput").val();
    $("#specialtyInput").val("");
    currentSearch.getDoctors(conditionName, displayDoctors);
  });
});
