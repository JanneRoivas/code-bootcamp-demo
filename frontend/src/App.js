import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Kakut from './Components/Kakut';/*
import Leivokset from './Components/Leivokset';
import Pullat from './Components/Pullat';
import Tortut from './Components/Tortut';*/

import './App.css';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/kakut"><Kakut/></Route>
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}

export default App;
