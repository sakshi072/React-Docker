import React from 'react';
import ReactDOM from 'react-dom';
import Di from './Component/Di.js';
import './App.css';
import Flight_result from './Component/Flight_result.js';
import Pinfo from './Component/Pinfo.js';
import Payment from './Component/Payment.js';
import Confirmation from './Component/Confirmation.js';
import Rough from './Component/Rough.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {

 render(){
 return (
    <Router>
    <div>
     <Switch>
     <Route exact path="/" component={Di} />
     <Route path="/Results" component={Flight_result} />
     <Route path="/Pinfo" component={Pinfo} />
     <Route path="/Payment" component={Payment} />
     <Route path="/Confirmation" component={Confirmation} />
      </Switch>
     </div>
    </Router>
     );
   }
}

export default App;


