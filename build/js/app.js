(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b13953cfc5de42562c6ba06c66e0cf34"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

//getDoctors method returns an array of doctor objects
Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

  //success branch
  .then(function(result) {
    console.log("Success Branch reached!");
    //parse result
    console.log(result);
    // var parsedResult = JSON.parse(result);
    console.log("API call returned: " + result);
    console.log("result data is: " + result.data);
    console.log("result.data[0].profile.first_name is: " + result.data[0].profile.first_name);
    //populate doctors array by looping through result's data objects
    var doctors = [];
    result.data.forEach(function(doctor) {
      doctors.push(doctor);
    });
    console.log("doctors contains: " + doctors);
    console.log("displayFunction is about to run");
    displayFunction(medicalIssue, doctors);
  })

  //failure branch
  .fail(function(error) {
    console.log("Failure Branch Reached!");
    displayFunction(error.message);
  });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
