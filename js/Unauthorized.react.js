var React = require('react');

var Unauthorized = React.createClass({
  render() {
    return(
      <div className="container">
        <div className="row">
          <h1>Please log in</h1>
        </div>
      </div>
    )
  }
});

module.exports = Unauthorized;
