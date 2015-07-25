var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var config = require('./config.js');

Parse.initialize(config.appkey, config.jskey);

var NavBar = require('./NavBar.react.js');
var NotFound = require('./NotFound.react.js');
var AnalyticsContainer = require('./AnalyticsContainer.react.js');
var CampaignContainer = require('./CampaignContainer.react.js');
var Index = require('./Index.react.js');
var LoginContainer = require('./LoginContainer.react.js');
var Simulator = require('./Simulator.react.js');

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({ // this line replaces FB.init({
    appId      : config.fbappkey, // Facebook App ID
    status     : true,  // check Facebook Login status
    cookie     : true,  // enable cookies to allow Parse to access the session
    xfbml      : true,  // initialize Facebook social plugins on the page
    version    : 'v2.4' // point to the latest Facebook Graph API version
  });

  // Run code after the Facebook SDK is loaded.
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
    <Route path="/campaigns" handler={CampaignContainer}/>
    <Route path="/simulator" handler={Simulator}/>
    <Route path="/*" handler={NotFound}/>
  </Route>
);


Router.run(routes, function (Handler) {

  React.render(<Handler/>, document.getElementById('app'));

  // console.log(window.location);
  // $(document).ready(function() {
  //     $("li").each(function() {
  //       var theli = $(this);
  //       console.log($("a",this).attr('href'));
  //       if ($("a",this).attr('href') == window.location.href) {
  //           // $(this).addClass("active");
  //           theli.addClass('active');
  //       }
  //       else {
  //         theli.removeClass('active');
  //       }
  //     });
  // });

});
