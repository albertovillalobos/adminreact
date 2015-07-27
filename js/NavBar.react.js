var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
// var $ = require('jquery');

var NavBar = React.createClass({

  mixins: [ParseReact.Mixin],

  observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},

  getInitialState() {
    return {
      userData: null,
      loggedIn: false,
    };
  },


  _logOut: function(e) {
    e.preventDefault();
		Parse.User.logOut();
    this.setState({loggedIn:false});
	},

  _facebookLogin: function(e) {
    var _this = this;
    e.preventDefault();
    Parse.FacebookUtils.logIn('public_profile,email,user_about_me', {
      success(user) {
        _this.setState({loggedIn: true});
        var facebook = user.attributes.authData.facebook;
        var apiCall = `https://graph.facebook.com/v2.3/${facebook.id}?fields=name,email&access_token=${facebook.access_token}`;
        _this._fetchUserData(apiCall);
      },
      error(user, error) {
      }
    });
	},


  _fetchUserData: function(api) {
    var _this = this;
    if (this.state.loggedIn) {
      $.get(api, function(result) {
        _this.setState({
          userData: {
            name: result.name,
            email: result.email
          }
        })
      });
    }
    // fetch(api)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     _this.setState({
    //       userData : {
    //         name : responseData.name,
    //         email: responseData.email,
    //       },
    //     });
    //   })
    //   .done();
  },


  render: function() {
    var  _this = this;
    var _userData = this.state.userData;
    var _loggedIn = this.state.loggedIn;
    var logButtons = {};

    if (this.state.loggedIn) {
      logButtons = (<li><a href="/#/logout" onClick={this._logOut}><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Log Out</a></li>);
    }
    else {
      logButtons = (
          <li><a href="/#/login" onClick={this._facebookLogin}><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Log In</a></li>
      );
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
                <li><a href="/#/simulator"><span className="glyphicon glyphicon-tasks" aria-hidden="true"></span> Simulator</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">

                {_userData ? <li><p className='navbar-text'>Welcome {_userData.name}</p></li> : <li></li> }
                {logButtons}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
});
module.exports = NavBar;
