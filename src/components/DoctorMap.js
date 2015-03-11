/** @jsx React.DOM */

var 
      React = require('react')
    , _ = require('underscore')
;   

var DoctorMap = React.createClass({

  componentDidMount: function () {
    var self = this;
    var map = new google.maps.Map(this.getDOMNode());
    var bounds = new google.maps.LatLngBounds();

    _.map(this.props.doctors, function(doctor) {
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(doctor.lat, doctor.lng),
          map: map,
      });

      //extend the bounds to include each marker's position
      bounds.extend(marker.position);
    });
    map.fitBounds(bounds);
    
    this.setState({map: map})
  },

  render: function() {
    return (
      <div className="doctor-map"></div>
    )
  }
});

module.exports = DoctorMap;
