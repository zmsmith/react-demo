/** @jsx React.DOM */

var DoctorSearch = require('./components/DoctorSearch');

module.exports.init = function(doctors) {
    return <DoctorSearch doctors={doctors} />
};
