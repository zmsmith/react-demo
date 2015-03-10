/** @jsx React.DOM */

jest.dontMock('../DoctorListing');

var 
    DoctorListing = require('../DoctorListing')
  , React = require('react/addons')
  , TestUtils = React.addons.TestUtils
;

describe('DoctorListing', function() {

  var doctorData;

  beforeEach(function(){
      doctorData = {
        name: "Dr. Pepper",
        address: "Plano, TX",
        description: "Pepper-style carbonated soft drink"
      }
  })

  it('renders name', function() {
    var doctor = TestUtils.renderIntoDocument(
      <DoctorListing {...doctorData} />
    );
    var elem = TestUtils.findRenderedDOMComponentWithClass(doctor, "doctor-listing-name");
    expect(elem.getDOMNode().textContent).toEqual("Dr. Pepper");
  });

  it('renders address', function() {
    var doctor = TestUtils.renderIntoDocument(
      <DoctorListing {...doctorData} />
    );
    var elem = TestUtils.findRenderedDOMComponentWithClass(doctor, "doctor-listing-address");
    expect(elem.getDOMNode().textContent).toEqual("Plano, TX");
  });

  it('defaults to not showing the description', function() {
    var doctor = TestUtils.renderIntoDocument(
      <DoctorListing {...doctorData} />
    );
    var elem = TestUtils.scryRenderedDOMComponentsWithClass(doctor, "doctor-listing-description");
    expect(elem).toEqual([]);
  });

  it('shows description on click', function() {
    var doctor = TestUtils.renderIntoDocument(
      <DoctorListing {...doctorData} />
    );

    var toggle = TestUtils.findRenderedDOMComponentWithClass(doctor, "toggle");
    React.addons.TestUtils.Simulate.click(toggle);

    var elem = TestUtils.findRenderedDOMComponentWithClass(doctor, "doctor-listing-description");
    expect(elem.getDOMNode().textContent).toEqual("Pepper-style carbonated soft drink");
  });

});
