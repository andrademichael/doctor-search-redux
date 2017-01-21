var Doctor = ('./../js/doctorSearch.js').doctorModule;

var displayDoctors = function(results) {
  for (var i = 0; i < results.length; i++) {
    $("#doctorDisplay").push("<li>" + results[i] + "</li>");
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
