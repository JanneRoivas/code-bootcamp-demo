import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Products from './Components/Products';


import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products/:Tyyppi"><Products/></Route>
        <Route path="/products"><Products/></Route>
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}

export default App;
