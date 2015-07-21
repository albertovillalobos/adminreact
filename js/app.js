var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Route = Router.Route;




var RouteHandler = Router.RouteHandler;
var App = React.createClass({

  render() {
    return(
      <div>
        <NavBar/>
        <AnalyticsContainer/>
      </div>
    )
  }
});

var RoutedApp = React.createClass({
  render(){
    console.log(this.props.children);
    return(
      <div>
        <NavBar/>
        <RouteHandler/>
      </div>
    )
  }
})


var NavBar = React.createClass({

  render: function() {

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

              <a className="navbar-brand" href="/">AdminReact</a>
            </div>

            <div className="collapse navbar-collapse" id="js-navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/#/Analytics"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
                <li className=""><a href="/#/coupons"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>  Coupons</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
});


var AnalyticsContainer = React.createClass({

  render() {
    return(
      <div className="container">
        <div className="row">
          <CouponCounter/>
          <DailyProfits/>
          <WeeklyProfits/>
          <MonthlyProfits/>
        </div>
      </div>
    )
  }
});

var CouponCounter = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">CURRENT</div>
          <div className="panel-body text-center">
            <h2>4</h2>
            <p className="lead">
              active coupons
            </p>
          </div>
        </div>
      </div>
    )
  }
});

var DailyProfits = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">DAILY</div>
          <div className="panel-body text-center">
            <h2 >$56.23 </h2>
            <p className="lead">
              Profits today
            </p>
          </div>
        </div>
      </div>
    )
  }
});


var WeeklyProfits = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">WEEKLY</div>
          <div className="panel-body text-center">
            <h2>$441.91</h2>
            <p className="lead">
              Profits this week
            </p>
          </div>
        </div>
      </div>
    )
  }
});


var MonthlyProfits = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">MONTHLY</div>
          <div className="panel-body text-center">
            <h2>$3,208.76</h2>
            <p className="lead">
              Profits this month
            </p>
          </div>
        </div>
      </div>
    )
  }
});

var Index = React.createClass({
  render() {
    return (<h1>Welcome to the admin panel</h1>);
  }
});

var Coupons = React.createClass({
  render() {
    return (<h1>Welcome to the Coupon panel</h1>);
  }
});


var NotFound = React.createClass({
  render() {
    return (<h2>Not found</h2>);
  }
});


var routes = (
  <Route handler={RoutedApp}>
    <Route path="/" handler={Index}/>
    <Route path="/analytics" handler={AnalyticsContainer}/>
    <Route path="/coupons" handler={Coupons}/>
    <Route path="/*" handler={NotFound}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
