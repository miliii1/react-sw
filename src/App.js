import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Characters from './components/Characters/Chatacters';
import Planets from './components/Planets/Planets';
import Ships from './components/StarShips/Ships';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Nav} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/characters' component={Characters} />
          <Route exact path='/planets' component={Planets} />
          <Route exact path='/starships' component={Ships} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
