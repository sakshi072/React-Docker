import React from 'react';
import ReactDOM from 'react-dom';
import Di from './Di.js';
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';

class Flight_result extends React.Component{
constructor(props){
super(props)
this.state={
dep:'',
arr:'',
flight_num:'',
length:'',
index:'',
data:[],
submitted:'false',
}
}

onSubmitHandler=(event)=>{
console.log(event.currentTarget.innerHTML);
let data=event.currentTarget.innerHTML;
let val=data.split('<custom>');
console.log(val);
for(let i=1;i<val.length-1;i++){
let val1=val[i].split("</custom>");
this.state.data.push(val1[0]);
}
this.state.data.push(this.props.location.state.arr1[0].pass_num);
this.state.data.push(this.props.location.state.arr1[0].din);
console.log(this.state.data);
this.setState({submitted:'true'})
}

redirect=()=>{
const arr=this.state.data;
this.props.history.push('/Pinfo',{arr});
}

render(){
if(this.state.submitted==='true'){
{this.redirect()}
}
return(
<div>
    <h1>Available Flights</h1>
     <table className="table">
     <thead>
     <tr>
     <th>Departure</th>
     <th>Arrival</th>
     <th>Flight Number</th>
     </tr>
     </thead>
     </table>
      {
       console.log(this.props.location.state.arr1[0].pass_num),
       this.props.location.state.arr1.map(
       (flight,index)=>
       <form onSubmit={this.onSubmitHandler}>
       <div>
       <table>
       <tbody>
       <tr>
       <td><custom>{flight.dep}</custom></td>
       <td><custom>{flight.arr}</custom></td>
       <td><custom>{flight.flight_num}</custom></td>
       <td><custom><button>Submit</button></custom></td>
        </tr>
        </tbody>
        </table>
        </div>
        </form>
        )
        }
        </div>
        );
    }
}

export default Flight_result;