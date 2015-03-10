/** @jsx React.DOM */

var 
    React = require('react')
  , DoctorListing = require('./DoctorListing')
  , _ = require('underscore')

;

var DoctorList = React.createClass({

  renderDoctor: function(doctor) {
    doctor = _.extend(doctor, {key: doctor.id})
    return <DoctorListing {...doctor} />
  },

  render: function() {
    return (
      <div className="doctor-list">
        {_.map(this.props.doctors, this.renderDoctor, this)}
      </div>
    )
  }
});

module.exports = DoctorList;