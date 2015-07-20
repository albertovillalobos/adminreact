var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');



var App = React.createClass({

  render() {
    return(
      <NavBar/>
    )
  }
})


var NavBar = React.createClass({

  render: function() {

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

              <a className="navbar-brand" href="/">AdminReact</a>
            </div>

            <div className="collapse navbar-collapse" id="js-navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Analytics</a></li>
                <li className=""><a href="/coupons"><span className="glyphicon glyphicon-barcode" aria-hidden="true"></span>  Coupons</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
})


React.render(
  <App/>,
  document.getElementById('app')
)
