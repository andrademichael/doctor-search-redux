(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
