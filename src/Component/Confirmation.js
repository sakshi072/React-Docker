import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, usehistory } from 'react-router-dom';


class Confirmation extends React.Component{

render(){
return(
<div>
{console.log(this.props.location.state.arr)}
<center><h1>Hi {this.props.location.state.arr[0].name}, your booking is successful and the PNR is {this.props.location.state.arr[0].pnr}</h1></center>
</div>
)
}
}

export default Confirmation;