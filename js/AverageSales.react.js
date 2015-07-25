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

    var sum = 1;
    var avg = 1;
    var amount = this.data.transactions.length || 1;
    for (var i = 0; i < this.data.transactions.length; i++) {
      sum += Number(this.data.transactions[i].expense);
      console.log(sum);
    }
    avg = sum/amount;
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">AVERAGE SALE</div>
            <div className="panel-body text-center">
              <h2>${avg.toFixed(2)}</h2>
              <p className="lead">
                Average Sale
              </p>
            </div>
        </div>
      </div>
    )
  }
});


module.exports = CampaignCounter;
