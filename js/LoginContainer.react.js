var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');





var LoginContainer = React.createClass({
  mixins: [ParseReact.Mixin],



  getInitialState: function() {

    // Parse.User.logOut();
    console.log('initial state', ParseReact.currentUser);

		return {
			error: null,
			signup: false
		};
	},


  observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},





  _logOut: function() {
		Parse.User.logOut();
		console.log('logout');
    console.log('ParseReact.currentUser',ParseReact.currentUser);
    console.log('Parse.User.current', Parse.User.current());
	},

  _facebookLogin: function() {
    Parse.FacebookUtils.logIn('public_profile', {
      success(user) {
        console.log('loggedin');
        console.log('ParseReact.currentUser',ParseReact.currentUser);
        console.log('Parse.User.current', Parse.User.current());
      },
      error(user, error) {
        console.log('user',user, error);
      }
    });
	},


  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <center>
              <button
                className="btn btn-large btn-primary"
                onClick={this._facebookLogin}>
                  <i className="fa fa-facebook-official"/> Login with Facebook
              </button>
              <button
                className="btn btn-large btn-danger"
                onClick={this._logOut}>
                Log out
              </button>
            </center>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = LoginContainer;
