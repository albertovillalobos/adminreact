var React = require('react');

var NavBar = React.createClass({
  render: function() {

    // var RightNavbar = return (
    //   <li><a href="/#/coupon"><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Log out</a></li>
    // );



    return(

      <div className="theNavbar header">
        <div className="navbar navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="/#/">AdminReact</a>
            </div>

            <div className="collapse navbar-collapse" id="js-navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="/#/coupon"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Coupon</a></li>
                <li><a href="/#/analytics"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
              </ul>
            </div>
            <ul class="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </div>
    )
  },
});
module.exports = NavBar;
