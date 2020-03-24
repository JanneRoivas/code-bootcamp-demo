import React from 'react'
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import './App.css'



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:tyyppi" component={Products} />
        <Route exact path="/:tyyppi/:id" component={Product} />
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}

export default App;
