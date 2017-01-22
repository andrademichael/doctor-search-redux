var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = (function(results) {
  results.forEach(function(result) {
    $("#doctorsList").append("<li><em>" +  result.profile.first_name + " " + result.profile.last_name + ", " + "</em><br>" + result.profile.bio + "<br><p>Practices at: <strong>" +
    result.practices.forEach(function(practice) {
      $("#doctorsList").append("<p>" + practice.name + "</p>";
    });
    + "</strong>" + "</li><br>")
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
