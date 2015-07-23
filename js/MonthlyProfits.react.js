var React = require('react');

var MonthlyProfits = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">MONTHLY</div>
          <div className="panel-body text-center">
            <h2>$3,208.76</h2>
            <p className="lead">
              Profits this month
            </p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MonthlyProfits;
