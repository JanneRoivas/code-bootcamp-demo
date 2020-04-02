import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import './App.css'
import Yhteystiedot from './Components/Yhteystiedot'
import Login from './Components/Login'



function App() {
  return (
    <Router >
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Yhteystiedot" component={Yhteystiedot}/>
        <Route path="/Login" component={Login}/>
        <Route exact path="/:tyyppi" component={Products} />
        <Route exact path="/:tyyppi/:id" component={Product} />
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}
export default App;
