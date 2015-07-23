var React = require('react');

var CouponCreator = require('./CouponCreator.react.js');
var CouponList = require('./CouponList.react.js');

var CouponsContainer = React.createClass({

  render() {
    return(
      <div className="container">
        <div className="row">
          <CouponCreator/>
          <CouponList/>
        </div>
      </div>
    )
  }
})


module.exports = CouponsContainer;
