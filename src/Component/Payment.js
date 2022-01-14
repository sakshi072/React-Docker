import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';

class Payment extends React.Component{
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
this.state.date=this.props.location.state.arr[4];
this.state.flightnum=this.props.location.state.arr[2];
this.state.pass_num=this.props.location.state.arr[3];
this.state.phn_num=this.props.location.state.arr[5];
this.state.email=this.props.location.state.arr[6];
this.state.gender=this.props.location.state.arr[7];
this.state.fname=this.props.location.state.arr[8];
this.state.lname=this.props.location.state.arr[9];
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
{this.getVal()}
<center><h1>PAYMENT PAGE</h1></center>
<center><button onClick={this.subhand}>PROCEED</button></center>
</div>
)
}
}

export default Payment;