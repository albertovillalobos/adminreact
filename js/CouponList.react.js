var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CouponList = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      coupons: (new Parse.Query('Coupon').descending("createdAt"))
    };
  },

  destroy(e) {
    console.log('destroying: ', e.target.id);
    var id = e.target.id.trim();
    var target = {
      className: 'Coupon',
      objectId: e.target.id
    };
    ParseReact.Mutation.Destroy(target).dispatch();

  },

  render() {

    console.log(this.destroy);
    var destruction = this.destroy;

    var couponNodes = this.data.coupons.map( function(coupon) {

      return(
        <tr key={coupon.objectId}>
          <td>{coupon.description}</td>
          <td>{coupon.percentage}%</td>
          <td>{coupon.conditions}</td>
          <td>
            <button type="submit" className="btn btn-small btn-danger" id={coupon.objectId} onClick={destruction}>Discontinue</button>
          </td>
        </tr>
      )
    });

    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Coupon Status</div>
          <div className="panel-body text-center">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Discount</th>
                    <th>Percentage</th>
                    <th>Time left</th>
                    <th>Times claimed</th>
                  </tr>
                </thead>
                <tbody>
                  {couponNodes}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = CouponList;
