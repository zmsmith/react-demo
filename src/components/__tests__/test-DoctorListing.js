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
        address: "Plano, TX"
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

});
