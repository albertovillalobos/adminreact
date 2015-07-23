var React = require('react');

var CouponCounter = require('./CouponCounter.react.js');
var DailyProfits = require('./DailyProfits.react.js');
var WeeklyProfits = require('./WeeklyProfits.react.js');
var MonthlyProfits = require('./MonthlyProfits.react.js');

var AnalyticsContainer = React.createClass({
  render() {
    return(
      <div className="container">
        <div className="row">
          <CouponCounter/>
          <DailyProfits/>
          <WeeklyProfits/>
          <MonthlyProfits/>
        </div>
      </div>
    )
  }
});

module.exports = AnalyticsContainer;
