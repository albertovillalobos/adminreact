var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Unauthorized = require('./Unauthorized.react.js');
var SimulationCreator = require('./SimulationCreator.react.js');


var Simulator = React.createClass({
  mixins: [ParseReact.Mixin],

  observe() {
		return {
			user: ParseReact.currentUser
		};
	},

  render() {
    if (this.data.user) {
      return(
        <div className="container">
          <div className="row">
            <SimulationCreator/>
          </div>
        </div>
      )
    } else {
      return (
        <Unauthorized/>

      )
    }
  }


})

module.exports = Simulator;
