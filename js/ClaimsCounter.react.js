var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CampaignCounter = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      transactions: new Parse.Query('Transaction').equalTo('merchant',Parse.User.current()).descending("createdAt")
    };
  },


  render() {
    var muhData = this.data;
    new Parse.Query('Transaction').equalTo('merchant',Parse.User.current()).count({
      success: function(result) {
        console.log(result);
        console.log(muhData)
      }
    })

    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">TRANSACTIONS</div>
            <div className="panel-body text-center">
              <h2>{this.data.transactions.length}</h2>
              <p className="lead">
                Discounts claimed!
              </p>
            </div>
        </div>
      </div>
    )
  }
});


module.exports = CampaignCounter;
