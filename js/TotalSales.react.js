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

    var sum = 10;
    for (var i = 0; i < this.data.transactions.length; i++) {
      sum += Number(this.data.transactions[i].expense);
    }
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">TOTAL</div>
            <div className="panel-body text-center">
              <h2>${sum.toFixed(2)}</h2>
              <p className="lead">
                Total Sales
              </p>
            </div>
        </div>
      </div>
    )
  }
});


module.exports = CampaignCounter;
