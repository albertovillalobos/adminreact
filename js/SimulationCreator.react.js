var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Unauthorized = require('./Unauthorized.react.js');


var SimulationCreator = React.createClass({
  mixins: [ParseReact.Mixin],

  observe() {
		return {
			user: ParseReact.currentUser
		};
	},

  render() {
    return(
      <h1>Welcome creator</h1>
    )
  }


})

module.exports = SimulationCreator;
