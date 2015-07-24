var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var CampaignStatus = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      campaigns: (new Parse.Query('Campaign').descending("createdAt"))
    };
  },


  _destroy() {
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
