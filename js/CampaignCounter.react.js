var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CampaignCounter = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      campaigns: (new Parse.Query('Campaign').equalTo('merchant',Parse.User.current()).descending("createdAt"))
    };
  },


  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">CURRENT</div>
            <div className="panel-body text-center">
              <h2>{this.data.campaigns.length}</h2>
              <p className="lead">
                Active Campaigns
              </p>
            </div>
        </div>
      </div>
    )
  }
});


module.exports = CampaignCounter;
