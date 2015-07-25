var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var CampaignCounter = require('./CampaignCounter.react.js');
var ClaimsCounter = require('./ClaimsCounter.react.js');
var DailyProfits = require('./DailyProfits.react.js');
var WeeklyProfits = require('./WeeklyProfits.react.js');
var MonthlyProfits = require('./MonthlyProfits.react.js');
var Unauthorized = require('./Unauthorized.react.js');
var AverageSales = require('./AverageSales.react.js');
var TotalSales = require('./TotalSales.react.js');
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
            <CampaignCounter/>
            <ClaimsCounter/>
            <AverageSales/>
            <TotalSales/>
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
