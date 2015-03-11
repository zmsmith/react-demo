/** @jsx React.DOM */

var 
      React = require('react')
    , _ = require('underscore')
;   

var INACTIVE = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 5
}

var ACTIVE = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 10
}

var DoctorMap = React.createClass({

  componentDidMount: function () {
    var self = this;
    var map = new google.maps.Map(this.getDOMNode());
    var bounds = new google.maps.LatLngBounds();

    var markers = {}

    _.map(this.props.doctors, function(doctor) {
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(doctor.lat, doctor.lng),
          map: map,
          icon: INACTIVE
      });
      markers[doctor.id] = marker

      google.maps.event.addListener(marker, 'click', function() {
        self.props.toggle(doctor.id)
      });

      //extend the bounds to include each marker's position
      bounds.extend(marker.position);
    });
    map.fitBounds(bounds);
    
    this.setState({map: map, markers: markers})
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevProps.activeListing) {
      this.state.markers[prevProps.activeListing].setIcon(INACTIVE)
    }
    if (this.props.activeListing) {
      this.state.markers[this.props.activeListing].setIcon(ACTIVE)
    }
  },

  render: function() {
    return (
      <div className="doctor-map"></div>
    )
  }
});

module.exports = DoctorMap;
