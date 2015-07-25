var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CouponCreator = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},

  _onSubmit(e) {
    e.preventDefault();
    var initialDiscount = React.findDOMNode(this.refs.initialDiscount).value.trim();
    var maxDiscount = React.findDOMNode(this.refs.maxDiscount).value.trim();
    var startTime = React.findDOMNode(this.refs.startTime).value.trim();
    var endTime = React.findDOMNode(this.refs.endTime).value.trim();
    var ownerRef = this.data.user;

    var muhRefs = this.refs;

    console.log(initialDiscount,maxDiscount,startTime,endTime,ownerRef);


    ParseReact.Mutation.Create('Campaign', {
      initialDiscount: initialDiscount,
      maxDiscount: maxDiscount,
      startTime: startTime,
      endTime: endTime,
      merchant: ownerRef
     })
     .dispatch()
     .then(function() {
       React.findDOMNode(muhRefs.initialDiscount).value = '';
       React.findDOMNode(muhRefs.maxDiscount).value = '';
       React.findDOMNode(muhRefs.startTime).value = '';
       React.findDOMNode(muhRefs.endTime).value = '';
       React.findDOMNode(muhRefs.endTime).value = '';
     })
  },


  render() {
    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Start a new Campaign</div>
          <div className="panel-body">
            <form className="form-group" id="coupon-creator-form" onSubmit={this._onSubmit}>
              <label>Inital Discount</label>
              <div className="input-group ">
                <input type="number"  ref="initialDiscount" className="form-control" placeholder="Initial percentage off" min={1} max={100} required/>
                <div className="input-group-addon">%</div>
              </div>
              <br/>
              <label>Max Discount</label>
              <div className="input-group ">
                <input type="number"  ref="maxDiscount" className="form-control" placeholder="Max percentage off" min={1} max={100} required/>
                <div className="input-group-addon">%</div>
              </div>
              <br/>
              <label>Starting time</label>
              <div className="input-group ">
                <input type="time"  ref="startTime" className="form-control" placeholder="Hours: 0-24" required/>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                </div>
              </div>
              <br/>
              <label>Ending time</label>
              <div className="input-group ">
                <input type="time"  ref="endTime" className="form-control" placeholder="Hours: 0-24" required/>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                </div>
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


module.exports = CouponCreator;
