var React = require('react');

var DailyProfits = React.createClass({
  render() {
    return(
      <div className="col-md-3 ">
        <div className="panel panel-default">
          <div className="panel-heading text-center">DAILY</div>
          <div className="panel-body text-center">
            <h2 >$56.23 </h2>
            <p className="lead">
              Profits today
            </p>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = DailyProfits;
