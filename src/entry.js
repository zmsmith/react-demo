/** @jsx React.DOM */

var 
      React = require("react")
    , DoctorList = require('./components/DoctorList')
    , DoctorMap = require('./components/DoctorMap')
;

module.exports.init = function(doctors) {
    return (
        <div>
            <div className="left-col">
                <DoctorList doctors={doctors} />
            </div>
            <div cassName="right-col">
                <DoctorMap doctors={doctors} />
            </div>
        </div>
    )
};
