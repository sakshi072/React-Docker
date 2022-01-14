import React from 'react';
import ReactDOM from 'react-dom';
import flightdetails from '../Service/axios.js';
import axios from "axios";
import Flight_result from './Flight_result.js'
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';

class Di extends React.Component {
  constructor(props) {
    super(props);
    //this.refreshCourses = this.refreshCourses.bind(this)
    this.state = { from: '',
    to: '',
    date: '',
    nos: '',
    flights:[],
    //arr:[{name:"1",age:"2",g:"3"},{name:"4",age:"5",g:"6"}],
    submitted:'false'
    };
  }
//   componentDidMount() {
//      this.refreshCourses();
//    }
//    refreshCourses(){
//        let name="?date="+this.state.date+"&from="+this.state.from+"&nos="+this.state.nos+"&nos1=0&to="+this.state.to+"";
//        flightdetails.retrieveflights(name)
//        .then(
//            response => {
//              console.log(response);
//            }
//        )
//    }
  myChangeHandler = (event) => {
    let nam= event.target.name;
    let val=event.target.value;
    this.setState({[nam]: val});
  }
  subhand = async event => {
  event.preventDefault();

  axios.get("http://localhost:8080/fdetails/?date="+this.state.date+"&from="+this.state.from+"&nos="+this.state.nos+"&nos1=0&to="+this.state.to+"")
  .then(
    response=>{
        console.log(response);
        this.setState({flights:response.data});
        this.setState({submitted:'true'});
    }
  )
}

redirect = () =>{
  const arr1=this.state.flights;
  this.props.history.push("/Results",{arr1});
}

  render() {
    if(this.state.submitted==='true'){
    {this.redirect()}
    }
    return (
      <form onSubmit={this.subhand}>
      <h1>From: {this.state.from}, To: {this.state.to}, On: {this.state.date}, NUM: {this.state.nos} </h1>
      <p>Enter Departure:</p>
      <input
        type='text'
        name='from'
        onChange={this.myChangeHandler}
      />
      <p>Enter Destination:</p>
      <input
        type='text'
        name='to'
        onChange={this.myChangeHandler}
        />
        <p>Enter Date</p>
        <input
        type='text'
        name='date'
        onChange={this.myChangeHandler}
        />
        <p>Enter number of passenger</p>
        <input
        type='text'
        name='nos'
        onChange={this.myChangeHandler}
        />
        <br></br>
        <input
        type='submit'
        />
      </form>
    );
}
}

export default Di;