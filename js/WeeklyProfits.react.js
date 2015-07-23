var React = require('react');

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

module.exports = WeeklyProfits;
