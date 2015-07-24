var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var NavBar = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},

  _logOut: function(e) {
    e.preventDefault();
    console.log('logout clicked',this.data.user);
		Parse.User.logOut();
	},

  _facebookLogin: function(e) {
    e.preventDefault();
    Parse.FacebookUtils.logIn('public_profile,email,user_about_me', {
      success(user) {
        console.log(user);
      },
      error(user, error) {
      }
    });
	},



  render: function() {
    var RightNavbar = {};
    if (this.data.user) {
      RightNavbar = <li><a href="/#/logout" onClick={this._logOut}><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Log Out</a></li>;
    }
    else {
      RightNavbar = <li><a href="/#/login" onClick={this._facebookLogin}><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Log In</a></li>;
    }




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
                <li><a href="/#/campaigns"><span className="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Campaigns</a></li>
                <li><a href="/#/analytics"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {RightNavbar}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
});
module.exports = NavBar;
