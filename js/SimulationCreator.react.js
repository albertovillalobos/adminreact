var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Unauthorized = require('./Unauthorized.react.js');


var SimulationCreator = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      campaigns: (new Parse.Query('Campaign').equalTo('merchant',Parse.User.current()).descending("createdAt"))
    };
  },



  _onSubmit(e) {
    // prevent default form submit
    e.preventDefault();

    // Get values from the input fields
    var maxExpense = React.findDOMNode(this.refs.maxExpense).value.trim();
    var minExpense = React.findDOMNode(this.refs.minExpense).value.trim();
    var simulationsAmount = React.findDOMNode(this.refs.simulationsAmount).value.trim();

    // save this.refs, because inside interval or for loop, this becomes something else
    var muhRefs = this.refs;
    if (this.data.campaigns.length > 0) {
      for (var i = 0; i < simulationsAmount; i++) {
        // pick a random  campaign from merchant's campaigns
        var randomCampaign = this.data.campaigns[Math.floor(Math.random() * this.data.campaigns.length)];

        console.log('randomCampaign', randomCampaign);

        // get random percentage between initialDiscount and maxDiscount of the random campaign created
        var randomDiscount = Math.random() * randomCampaign.maxDiscount + randomCampaign.initialDiscount;
        console.log('randomDiscount',randomDiscount);

        var randomExpense = Math.random() * minExpense + maxExpense;
        console.log('randomExpense',randomExpense);

        ParseReact.Mutation.Create('Transaction', {
          expense: randomExpense,
          discount: randomDiscount,
          couponRef: randomCampaign,
          merchant: this.data.user
         })
         .dispatch()
         .then(function() {
           React.findDOMNode(muhRefs.maxExpense).value = '';
           React.findDOMNode(muhRefs.minExpense).value = '';
           React.findDOMNode(muhRefs.simulationsAmount).value = '';
         })
      }
    }

  },

  render() {
    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Start a simulation</div>
          <div className="panel-body">
            <form className="form-group" id="coupon-creator-form" onSubmit={this._onSubmit}>
              <div className="input-group ">
                <input
                  type="number"
                  ref="minExpense"
                  className="form-control"
                  placeholder="Minimum expense?"
                  min={1} max={100} required/>
                <div className="input-group-addon">$</div>
              </div>
              <br/>
              <div className="input-group ">
                <input
                  type="number"
                  ref="maxExpense"
                  className="form-control"
                  placeholder="Maximum expense"
                  min={1}
                  max={100} required/>
                <div className="input-group-addon">$</div>
              </div>
              <br/>
              <div className="input-group ">
                <input type="number"  ref="simulationsAmount" className="form-control" placeholder="How many simulations?" min={1} max={100} required/>
                <div className="input-group-addon">Simulated Transactions</div>
              </div>
              <br/>
              <button type="Update" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

})

module.exports = SimulationCreator;
