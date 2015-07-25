
var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var LineChart = require("react-chartjs").Line;

var chartOptions = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "rgba(0,0,0,.1)",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#666",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    customTooltips: false,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipFillColor: "rgba(0,0,0,0.8)",
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipTitleFontSize: 14,
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#fff",
    tooltipYPadding: 6,
    tooltipXPadding: 6,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 10,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>",
    multiTooltipTemplate: "<%= value %>",
    onAnimationProgress: function(){},
    onAnimationComplete: function(){}
}


var SalesChart = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      transactions: new Parse.Query('Transaction').equalTo('merchant',Parse.User.current()).descending("createdAt")
    };
  },


  render() {

    var labels = [];
    var yPoints = [];
    for (var i = 0; i < this.data.transactions.length; i++) {
      yPoints.push( Number(this.data.transactions[i].expense).toFixed(2));
      labels.push(this.data.transactions[i].objectId)
    }
    var chartData = {
        labels: labels,
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: yPoints
            }
        ]
    };


    if (this.data.transactions.length<1) {
      return(
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading text-center">SALES CHART</div>
              <div className="panel-body text-center">
                <div>
                  <h1>loading...</h1>
                </div>
              </div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading text-center">SALES CHART</div>
              <div className="panel-body text-center">
                <div>
                  <LineChart data={chartData} options={chartOptions} />
                </div>
              </div>
          </div>
        </div>
      )
    }
  }

});


module.exports = SalesChart;
