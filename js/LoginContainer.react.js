var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');



var LoginContainer = React.createClass({
  mixins: [ParseReact.Mixin],



  getInitialState: function() {
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





  _facebookLogin: function() {
    console.log("logging in with fb");

		Parse.FacebookUtils.logIn(null, {
		  success: function(user) {

        console.log("success!");

		  },
		  error: function(user, error) {
        console.log("Error!")
		  }
		}).then(function() {
					self.setState({
						error: null
					});
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
            </center>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = LoginContainer;
