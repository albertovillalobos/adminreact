var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;






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
        <div className="AppContainer">
          {this.props.children}
        </div>
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
                <li className="active"><a href="/"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
                <li className=""><a href="/coupons"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>  Coupons</a></li>
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

var NotFound = React.createClass({
  render() {
    return (<h2>Not found</h2>);
  }
});



// React.render(
//   <App/>,
//   document.getElementById('app')
// );

React.render(
  (
    <Router>
      <Route component={RoutedApp}>
        <Route path="/" component={AnalyticsContainer}></Route>
      </Route>
    </Router>
  ), document.getElementById('app')
);

// React.render((
//   <Router>
//     <Route component={RoutedApp}>
//       <Route path="/" component={AnalyticsContainer}/>
//       <Route path="/analytics" component={AnalyticsContainer}/>
//       <Route path="*" component={NotFound}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'));
