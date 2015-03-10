/** @jsx React.DOM */

var React = require('react');

var DoctorListing = React.createClass({

  render: function() {
    return (
      <div className="doctor-listing">
        <h4 className="doctor-listing-name">{ this.props.name }</h4>
        <span className="doctor-listing-address">{ this.props.address }</span>
      </div>
    )
  }
});

module.exports = DoctorListing;
