/** @jsx React.DOM */

var 
    React = require('react')
  , DoctorList = require('./DoctorList')
  , DoctorMap = require('./DoctorMap')

;

var DoctorSearch = React.createClass({

  getInitialState: function() {
    return {activeListing: null}
  },

  toggleListing: function(id) {
    if (this.state.activeListing === id){
      this.setState({activeListing: null})
    } else {
      this.setState({activeListing: id})
    }
  },

  render: function() {
    var props = {
      doctors: this.props.doctors,
      toggle: this.toggleListing,
      activeListing: this.state.activeListing
    }

    return (
        <div>
            <div className="col">
                <DoctorMap {...props} />
            </div>
            <div className="col">
                <DoctorList {...props} />
            </div>
        </div>
    )
  }
});

module.exports = DoctorSearch;