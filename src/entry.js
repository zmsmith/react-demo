/** @jsx React.DOM */

var React = require("react");

var DoctorListing = require('./components/DoctorListing');

module.exports.init = function(doctors) {
    var doctor = doctors[0];
    return <DoctorListing {...doctor} />;
};
