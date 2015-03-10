/** @jsx React.DOM */

var React = require("react");

var DoctorList = require('./components/DoctorList');

module.exports.init = function(doctors) {
    return <DoctorList doctors={doctors} />;
};
