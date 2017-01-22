var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(results) {
  results.forEach(result) {
    $("#doctorsList").append("<li>" + results[i].profile.first_name + " " + results[i].profile.last_name + "<br>" + results[i].profile.bio + "<br>" + "Accepting new patients? " + "<strong>" + results[i].profile"</li>");
  }
};

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
