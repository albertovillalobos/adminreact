var React = require('react');
var CouponCounter = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">CURRENT</div>
          <div className="panel-body text-center">
            <h2>4</h2>
            <p className="lead">
              active coupons
            </p>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = CouponCounter;
