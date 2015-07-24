var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var CouponCounter = require('./CouponCounter.react.js');
var DailyProfits = require('./DailyProfits.react.js');
var WeeklyProfits = require('./WeeklyProfits.react.js');
var MonthlyProfits = require('./MonthlyProfits.react.js');
var Unauthorized = require('./Unauthorized.react.js');

var AnalyticsContainer = React.createClass({

  mixins: [ParseReact.Mixin],

  observe() {
		return {
			user: ParseReact.currentUser
		};
	},


  render() {
    if (this.data.user) {
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
    } else {
      return (
        <Unauthorized/>

      )
    }
  }
});

module.exports = AnalyticsContainer;
