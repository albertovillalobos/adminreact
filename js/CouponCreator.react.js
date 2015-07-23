var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CouponCreator = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    var description = React.findDOMNode(this.refs.description).value.trim();
    var percentage = React.findDOMNode(this.refs.percentage).value.trim();
    var conditions = React.findDOMNode(this.refs.conditions).value.trim();

    console.log(description, percentage, conditions);

    var muhRefs = this.refs;


    ParseReact.Mutation.Create('Coupon', {
       description: description,
       percentage: percentage,
       conditions: conditions,
     }).dispatch().then(function() {
       React.findDOMNode(muhRefs.description).value = '';
       React.findDOMNode(muhRefs.percentage).value = '';
       React.findDOMNode(muhRefs.conditions).value = '';
     })
  },


  render() {
    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Issue a new Coupon</div>
          <div className="panel-body text-center">
            <form className="form-group" id="coupon-creator-form" onSubmit={this.onSubmit}>
              <input type="text" ref="description" className="form-control spacey" placeholder="Description" required/>
              <div className="input-group spacey">
                <input type="number"  ref="percentage"className="form-control" placeholder="Percentage off" min={1} max={100} required/>
                <div className="input-group-addon">%</div>
              </div>
              <input type="text" className="form-control spacey" ref="conditions" placeholder="Conditions" required/>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = CouponCreator;
