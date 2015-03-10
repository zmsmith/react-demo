/** @jsx React.DOM */

jest.dontMock('../DoctorListing').dontMock('../DoctorList');

var 
    DoctorListing = require('../DoctorListing')
  , DoctorList = require('../DoctorList')
  , React = require('react/addons')
  , TestUtils = React.addons.TestUtils
;

describe('DoctorListing', function() {

  var doctorData;

  beforeEach(function(){
      doctorData = [{
        id: "1",
        name: "Dr. Pepper",
        address: "Plano, TX",
        description: "Pepper-style carbonated soft drink"
      },{
        id: "2",
        name: "Dr. Zorro",
        address: "Beth Isreal Medical Center",
        description: "Dr. Allan Zarkin, 61, admitted using a scalpel to carve his initials into the midsection of Dr. Liana Gedz, whose baby he had just delivered by Caesarean section"
      }]
  })

  it('toggles', function() {

    var getToggleElement = function(doc) {
      return TestUtils.findRenderedDOMComponentWithClass(doc, "toggle");
    }

    var isOpen = function (doc) {
      var desc = TestUtils.scryRenderedDOMComponentsWithClass(doc, "doctor-listing-description");
      return desc.length > 0
    }

    var doctorList = TestUtils.renderIntoDocument(
      <DoctorList doctors={ doctorData } />
    );

    var doctors = TestUtils.scryRenderedComponentsWithType(doctorList, DoctorListing);
    
    expect(isOpen(doctors[0])).toBeFalsy()
    expect(isOpen(doctors[1])).toBeFalsy()

    React.addons.TestUtils.Simulate.click(getToggleElement(doctors[0]));

    expect(isOpen(doctors[0])).toBeTruthy()
    expect(isOpen(doctors[1])).toBeFalsy()

    React.addons.TestUtils.Simulate.click(getToggleElement(doctors[1]));

    expect(isOpen(doctors[0])).toBeFalsy()
    expect(isOpen(doctors[1])).toBeTruthy()


  });

});