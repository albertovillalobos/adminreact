var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


Parse.initialize("fUnC8PIBgPR26VUGhbsZFH4tStFUFyOZJ6baLo8O", "CkPiEsxSHfqtriaJ266t2yknRXArxBy1lVs5WQvI");

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
    return(
      <div>
        <NavBar/>
        <RouteHandler/>
      </div>
    )
  }
})


// Nav bar
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

              <a className="navbar-brand" href="/#/">AdminReact</a>
            </div>

            <div className="collapse navbar-collapse" id="js-navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/#/analytics"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
                <li className=""><a href="/#/coupons"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span>Coupons</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
});


// Analytics page and its components
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





// var AnalyticsContainer = React.createClass({
//
//   render() {
//     return(
//       <div className="container">
//         <div className="row">
//           <CouponCounter/>
//           <DailyProfits/>
//           <WeeklyProfits/>
//           <MonthlyProfits/>
//         </div>
//       </div>
//     )
//   }
// });

// Coupons page and its components
var CouponsContainer = React.createClass({

  render() {
    return(
      <div className="container">
        <div className="row">
          <CouponCreator/>
          <CouponList/>
        </div>
      </div>
    )
  }
})


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
          <div className="panel-heading text-center">Current coupons</div>
          <div className="panel-body text-center">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Conditions</th>
                    <th>Action</th>
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

// Normal routing stuff
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
    <Route path="/coupons" handler={CouponsContainer}/>
    <Route path="/*" handler={NotFound}/>
  </Route>
);


Router.run(routes, function (Handler) {

  console.log(window.location);
  $(document).ready(function() {
      $("li").each(function() {
        var theli = $(this);
        console.log($("a",this).attr('href'));
        if ($("a",this).attr('href') == window.location.href) {
            // $(this).addClass("active");
            theli.addClass('active');
        }
        else {
          theli.removeClass('active');
        }
      });
  });
  React.render(<Handler/>, document.getElementById('app'));
});
