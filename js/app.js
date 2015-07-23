var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

Parse.initialize("fUnC8PIBgPR26VUGhbsZFH4tStFUFyOZJ6baLo8O", "CkPiEsxSHfqtriaJ266t2yknRXArxBy1lVs5WQvI");

var NavBar = require('./NavBar.react.js');
var NotFound = require('./NotFound.react.js');
var AnalyticsContainer = require('./AnalyticsContainer.react.js');
var CouponsContainer = require('./CouponsContainer.react.js');
var Index = require('./Index.react.js');


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
