var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var CouponCreator = require('./CouponCreator.react.js');
var CampaignStatus = require('./CampaignStatus.react.js');

var CampaignContainer = React.createClass({
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
            <CouponCreator/>
            <CampaignStatus/>
          </div>
        </div>
      )
    } else {
      return(
        <div className="container">
          <div className="row">
            <h1>Please log in</h1>
          </div>
        </div>
      )
    }
  }


})

module.exports = CampaignContainer;
