var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var CampaignStatus = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      campaigns: (new Parse.Query('Campaign').equalTo('merchant',Parse.User.current()).descending("createdAt"))
    };
  },

  // componentDidMount() {
  //   this.refreshQueries;
  //   var query = new Parse.Query('Campaign').equalTo('merchant',this.data.user).find({
  //     success: function(result) {
  //       console.log('found from owner', result.length);
  //     }
  //   })
  //   var query2 = new Parse.Query('Campaign').find({
  //     success: function(result) {
  //       console.log('found from all', result.length);
  //     }
  //   })
  // },

  _destroy(e) {
    var id = e.target.id.trim();
    var target = {
      className: 'Campaign',
      objectId: e.target.id
    };
    ParseReact.Mutation.Destroy(target).dispatch();
  },

  render() {


    var destroyMethod = this._destroy;
    var campaignNodes = this.data.campaigns.map( function(campaign) {
      console.log(campaign.objectId);

      return(
        <tr key={campaign.objectId}>
          <td>{campaign.initialDiscount}</td>
          <td>{campaign.maxDiscount}%</td>
          <td>{campaign.startTime}</td>
          <td>{campaign.endTime}</td>
          <td>
            <button type="submit" className="btn btn-small btn-danger" id={campaign.objectId} onClick={destroyMethod}>End Campaign</button>
          </td>
        </tr>
      )
    });

    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Campaign Status</div>
          <div className="panel-body text-center">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Initial Discount</th>
                    <th>Maximum Discount</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignNodes}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )  }
});


module.exports = CampaignStatus;
