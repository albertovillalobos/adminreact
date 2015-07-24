var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var CouponCreator = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    var description = React.findDOMNode(this.refs.description).value.trim();
    var percentage = React.findDOMNode(this.refs.percentage).value.trim();
    var conditions = React.findDOMNode(this.refs.conditions).value.trim();

    console.log(description, percentage, conditions);

    var muhRefs = this.refs;


    ParseReact.Mutation.Create('Coupon', {
       description: description,
       percentage: percentage,
       conditions: conditions,
     }).dispatch().then(function() {
       React.findDOMNode(muhRefs.description).value = '';
       React.findDOMNode(muhRefs.percentage).value = '';
       React.findDOMNode(muhRefs.conditions).value = '';
     })
  },


  render() {
    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center">Issue a new Coupon</div>
          <div className="panel-body">
            <form className="form-group" id="coupon-creator-form" onSubmit={this.onSubmit}>
              <label>Inital Discount</label>
              <div className="input-group ">
                <input type="number"  ref="percentage"className="form-control" placeholder="Initial percentage off" min={1} max={100} required/>
                <div className="input-group-addon">%</div>
              </div>
              <br/>
              <label>Max Discount</label>
              <div className="input-group ">
                <input type="number"  ref="percentage"className="form-control" placeholder="Max percentage off" min={1} max={100} required/>
                <div className="input-group-addon">%</div>
              </div>
              <br/>
              <label>Starting time</label>
              <div className="input-group ">
                <input type="number"  ref="percentage"className="form-control" placeholder="Hours: 0-24" min={0} max={24} required/>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                </div>
              </div>
              <br/>
              <label>Ending time</label>
              <div className="input-group ">
                <input type="number"  ref="percentage"className="form-control" placeholder="Hours: 0-24" min={0} max={24} required/>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                </div>
              </div>
              <br/>
              <button type="Update" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = CouponCreator;

//
// <div class="panel panel-default">
//         <div class="panel-heading text-center">
//           Coupon Settings
//         </div>
//         <div class="panel-body">
//           <form class="form-group" >
//
//             <label for="">Inital Discount</label>
//             <div class="input-group ">
//               <input type="number"  ref="percentage"class="form-control" placeholder="Initial percentage off" min=1 max=100 required/>
//               <div class="input-group-addon">%</div>
//             </div>
//             <br>
//             <label for="">Max Discount</label>
//             <div class="input-group ">
//               <input type="number"  ref="percentage"class="form-control" placeholder="Initial percentage off" min=1 max=100 required/>
//               <div class="input-group-addon">%</div>
//             </div>
//             <br>
//             <label for="">How often would you like a customer to come in?</label>
//             <div class="input-group ">
//               <div class="input-group-addon">Every</div>
//               <input type="number"  ref="percentage"class="form-control" placeholder="amount of" min=1 max=100 required/>
//               <div class="input-group-addon">Minutes</div>
//             </div>
//             <br>
//             <label for="">Starting time</label>
//             <div class="input-group ">
//               <input type="number"  ref="percentage"class="form-control" placeholder="amount of" min=1 max=100 required/>
//               <select class="form-control" name="">
//                 <option value="am">AM</option>
//                 <option value="pm">PM</option>
//               </select>
//             </div>
//             <br>
//             <label for="">Ending time</label>
//             <div class="input-group ">
//               <div class="input-group-addon">Every</div>
//               <input type="number"  ref="percentage"class="form-control" placeholder="amount of" min=1 max=100 required/>
//               <div class="input-group-addon">Minutes</div>
//             </div>
//           </form>
//         </div>
//       </div>
