import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';

class Pinfo extends React.Component{
constructor(props){
super(props)
this.state={
gender:'',
fname:'',
lname:'',
phn:'',
email:'',
counter:1,
data:[],
arrgender:[],
arrfname:[],
arrlname:[],
}
}

add_info=(event)=>{
this.state.data=this.props.location.state.arr;
this.state.data.push(this.state.phn);
this.state.data.push(this.state.email);
this.state.data.push(this.state.arrgender);
this.state.data.push(this.state.arrfname);
this.state.data.push(this.state.arrlname);
console.log(this.state.data);
}

onUpdate=(event)=>{
let nam=event.target.name;
let val=event.target.value;
this.setState({[nam]:val});
}

onSubmitHandler=(event)=>{
event.preventDefault();
this.state.arrgender.push(this.state.gender);
this.state.arrfname.push(this.state.fname);
this.state.arrlname.push(this.state.lname);
console.log(this.state.arrgender);
console.log(this.state.arrfname);
console.log(this.state.arrlname);
console.log(this.state.phn);
console.log(this.state.email);
this.state.counter=this.state.counter+1;
console.log(this.state.counter);
this.state.fname='';
this.state.lname='';
this.forceUpdate();
}

redirect=()=>{
const arr=this.state.data;
this.props.history.push('/Payment',{arr});
}

render(){
console.log(this.props.location.state.arr);
let length=this.props.location.state.arr.length;
let index=this.props.location.state.arr[length-2];
console.log(index);
if(this.state.counter<index){
return(
<div>
{console.log(this.state.counter)}
<h1>Passenger {this.state.counter} details</h1>
<form onSubmit={this.onSubmitHandler}>
Mr.<input type='radio' name='gender' value='male' onChange={this.onUpdate}/>
Mrs.<input type='radio' name='gender' value='female' onChange={this.onUpdate} />
First Name<input type='text' name='fname' value={this.state.fname} onChange={this.onUpdate} />
Last Name<input type='text' name='lname' value={this.state.lname} onChange={this.onUpdate} />
<input type='Submit'/>
</form>
</div>
)
}
else if(this.state.counter===index){
return(
<div>
{console.log(this.state.counter)}
<h1>Passenger {this.state.counter} details</h1>
<form onSubmit={this.onSubmitHandler}>
Mr.<input type='radio' name='gender' value='male' onChange={this.onUpdate}/>
Mrs.<input type='radio' name='gender' value='female' onChange={this.onUpdate} />
First Name<input type='text' name='fname' value={this.state.fname} onChange={this.onUpdate} />
Last Name<input type='text' name='lname' value={this.state.lname} onChange={this.onUpdate} />
Phone Number<input type='text' name='phn' onChange={this.onUpdate} />
Email<input type='text' name='email' onChange={this.onUpdate} />
<input type='Submit'/>
</form>
</div>
)
}
else{
return(
<div>
{this.add_info()},
{this.redirect()}
</div>
);
}
}
}

export default Pinfo;