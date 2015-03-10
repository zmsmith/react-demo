/** @jsx React.DOM */

var React = require('react');

var DoctorListing = React.createClass({

  getInitialState: function() {
    return {
      open: false
    }
  },

  click: function () {
    this.setState({open: !this.state.open})
  },

  renderDescription: function() {
    return <span className="doctor-listing-description">{ this.props.description }</span>
  },

  render: function() {
    return (
      <div className="doctor-listing">
        <div className="toggle" onClick={ this.click }>
          <h4 className="doctor-listing-name">{ this.props.name }</h4>
          <span className="doctor-listing-address">{ this.props.address }</span>
        </div>
        {this.state.open ? this.renderDescription(): null}
      </div>
    )
  }
});

module.exports = DoctorListing;
