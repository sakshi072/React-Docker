import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';
class Payment extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });

    }
 constructor(props){
 super(props)
 this.state={
 submitted:false,
 test:'',
 date:'',
 flightnum:'',
 pass_num:'',
 gender:[],
 fname:[],
 lname:[],
 phn_num:'',
 email:'',
 flightscon:[],
 }
 }

 getVal=()=>{
 this.state.test='no';
 this.state.date=this.props.location.state.arr[9];
 this.state.flightnum=this.props.location.state.arr[1];
 this.state.pass_num=this.props.location.state.arr[8];
 this.state.phn_num=this.props.location.state.arr[10];
 this.state.email=this.props.location.state.arr[11];
 this.state.gender=this.props.location.state.arr[12];
 this.state.fname=this.props.location.state.arr[13];
 this.state.lname=this.props.location.state.arr[14];
 }

 redirect=()=>{
 const arr=this.state.flightscon;
 this.props.history.push('/Confirmation',{arr});
 }

 subhand = async event => {
   event.preventDefault();
   axios.get("http://localhost:8080/fbooking/?date="+this.state.date+"&fselect="+this.state.flightnum+"&pass_num="+this.state.pass_num+"&gender="+this.state.gender+"&first_name="+this.state.fname+"&last_name="+this.state.lname+"&phn="+this.state.phn_num+"&email="+this.state.email+"&test="+this.state.test+"")
   .then(
     response=>{
         console.log(response);
         this.setState({flightscon:response.data});
         this.setState({submitted:'true'});
     }
   )
 }


render(){
console.log(this.props.location.state.arr);
if(this.state.submitted==='true'){
this.redirect();
}
return(
<div>
<div class="row">

<div class="col s6 l6 m6  left-align"><a class="black-text" style={{fontWeight:500,fontSize:18}} href="https://trouvaille.in">Cancel Payment</a></div>

<div class="col m6 l6 s6 right-align">Amount to be paid</div>

</div>

<div class="row">

<div class="col s6 l6 m6 left-align" style={{marginTop:-20}}> <p>Transaction Id: 1023658749</p></div>

<div class="col m6 l6 s6 right-align"> Rs &nbsp;24541 </div>

</div>
<h5 class="left-align">Select Your Payment Option</h5>
<ul class="collapsible">

<li class="active">

    <div class="collapsible-header">

       <h5>Debit Card</h5>

    </div>

    <div class="collapsible-body">

        <form class="col s12" id="debit">



            <div class="row">

                <div class="col m3 l3 s12">

                    <div class="input-field inline">

                        <input id="card-num" name="" type="text" Maxlength="16"/>

                        <span id="message2"></span>

                        <label for="card-num">Card Number</label>

                        <p>

                            <label>

                                <input type="checkbox" class="filled-in" checked="checked" />

                                <span>Save this card for future use. </span>

                            </label>

                        </p>


                    </div>

                </div>

                <div class="col s6 m3 l3">

                    <div class="input-field inline ">

                        <input id="valid"name="" type="text" placeholder="mm/yy"/>

                        <label for="valid">Validity</label>

                        <span id="message3"></span>

                    </div>

                </div>


                <div class="col s6 l3 m3">

                    <div class="input-field inline">

                        <input type="password" Maxlength="3"  id="cvv" name="" class=""/>

                        <span id="message1"></span>

                        <label for="cvv">CVV</label>

                    </div>

                </div>

            <div class="col m3 s12 l3">

                <div class="input-field">

                        <button type="submit" class="btn waves-effect wave-light red lighten-1" onClick={this.subhand}>Pay &nbsp;Rs&nbsp;</button>



                </div>

            </div>

            </div>

        </form>


    </div>

</li>

<li>

    <div class="collapsible-header">

        <h5>Credit Card</h5>

    </div>

    <div class="collapsible-body">

        <form class="col s12" id="debit">



            <div class="row">

                <div class="col m3 l3 s12">

                    <div class="input-field inline">

                        <input id="card-num1" name="" type="text" Maxlength="16"/>

                        <label for="card-num1">Card Number</label>

                        <span id="message4"></span>

                        <p>

                            <label>

                              <input type="checkbox" class="filled-in" checked="checked" />

                              <span>Save this card for future use. </span>

                            </label>

                        </p>


                    </div>

                </div>

                <div class="col s6 m3 l3">

                    <div class="input-field inline ">

                        <input id="valid1"name="" type="text" placeholder="mm/yy"/>

                        <label for="valid">Validity</label>

                        <span id="message5"></span>

                    </div>

                </div>


                <div class="col s6 l3 m3">

                    <div class="input-field inline">

                        <input type="password" Maxlength="3"  id="cvv1" name="" class=""/>

                        <span id="message6"></span>

                        <label for="cvv">CVV</label>

                    </div>

                </div>

            <div class="col m3 s12 l3">

                <div class="input-field">

                        <button type="submit" class="btn waves-effect wave-light red lighten-1" onClick={this.subhand}>Pay &nbsp;Rs&nbsp;54454</button>



                </div>

            </div>

            </div>

        </form>


    </div>

</li>

<li>

    <div class="collapsible-header">

        <h5>BHIM UPI</h5>

    </div>

    <div class="collapsible-body">

        <form class="col s12" id="upi">



            <div class="row">

                <div class="col m3 l3 s6">

                    <div class="input-field inline">

                        <input id="upi" name="" type="text" placeholder="username@bank" required/>

                        <label for="upi">UPI ID</label>


                    </div>

                </div>

                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">



                    </div>

                </div>

                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">



                    </div>

                </div>

            <div class="col m3 s6 l3">

                <div class="input-field">

                        <button type="submit" class="btn waves-effect wave-light red lighten-1" onClick={this.subhand}>Pay &nbsp;Rs&nbsp;32465</button>



                </div>

            </div>

            </div>

        </form>

    </div>

</li>


<li>

    <div class="collapsible-header">

        <h5>Net Banking</h5>

    </div>

    <div class="collapsible-body">

        <form class="col s12" id="net-bank">


            <div class="row">

                <div class="col m3 l3 s6">

                    <div class="input-field inline">

                        <select class="icons" style={{width: 400}} required>

                                    <option value="" disabled selected>Select Your Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/SBI.png">&nbsp;&nbsp;State Bank of India</option>

                                    <option class="bank" value="" data-icon="https://staticgw1.paytm.in/native/bank/BOI.png">&nbsp;&nbsp;Bank of India</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/INDB.png">&nbsp;&nbsp;Indian Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/HDFC.png">&nbsp;&nbsp;HDFC Bank</option>

                                    <option value="" data-icon="images/cbi.png">&nbsp;&nbsp;Central Bank of India</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/AXIS.png">&nbsp;&nbsp;Axis Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/PNB.png">&nbsp;&nbsp;Punjab National Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/YES.png">&nbsp;&nbsp;Yes Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/CANARA.png">&nbsp;&nbsp;Canara Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/BOB.png">&nbsp;&nbsp;Bank of Baroda</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/UCO.png">&nbsp;&nbsp;UCO Bank</option>

                                    <option value="" data-icon="images/union.png">&nbsp;&nbsp;Union Bank of India</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/IOB.png">&nbsp;&nbsp;Indian Overseas Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/PSB.png">&nbsp;&nbsp;Punjab and Sind Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/BOM.png">&nbsp;&nbsp;Bank of Maharashtra</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/CITIUB.png">&nbsp;&nbsp;City Union Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/ICICI.png">&nbsp;&nbsp;ICICI Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/IDFC.png">&nbsp;&nbsp;IDFC First Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/FDEB.png">&nbsp;&nbsp;Federal Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/INDS.png">&nbsp;&nbsp;IndusInd Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/ANDB.png">&nbsp;&nbsp;Andhra Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/KVB.png">&nbsp;&nbsp;Karur Vysya Bank</option>

                                    <option value="" data-icon="https://staticgw1.paytm.in/native/bank/NKMB.png">&nbsp;&nbsp;Kotak Mahindra Bank</option>

                        </select>

                      </div>

                </div>


                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">

                    </div>

                </div>

                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">

                    </div>

                </div>



            <div class="col m3 s6 l3">

                <div class="input-field">
                        <button type="submit" class="btn waves-effect wave-light red lighten-1" onClick={this.subhand}>Pay &nbsp;Rs&nbsp;3245646</button>


                </div>

            </div>

            </div>



        </form>

    </div>

</li>


<li>

    <div class="collapsible-header">

        <h5>Amazon Pay</h5>

    </div>

    <div class="collapsible-body">

        <form class="col s12">



            <div class="row">

                <div class="col m3 l3 s6">

                    <div class="input-field inline">

                        <input id="a-pay" name="" type="text" placeholder="username@bank" required/>

                        <label for="a-pay">UPI</label>



                    </div>

                </div>

                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">



                    </div>

                </div>

                <div class="col m3 l3 hide-on-small-only">

                    <div class="input-field inline">

                    </div>

                </div>

            <div class="col m3 s6 l3">

                <div class="input-field">

                      <button type="submit" class="btn waves-effect wave-light red lighten-1" onClick={this.subhand}>Pay &nbsp;Rs&nbsp;2554</button>

                </div>

            </div>

            </div>

        </form>

    </div>

</li>

</ul>


</div>
)
}
}

export default Payment;