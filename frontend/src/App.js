import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import './App.css'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import Yhteystiedot from './Components/Yhteystiedot'
import Login from './Components/Login'
import Logged from './Components/Logged'

const authenticated = sessionStorage.getItem('isAuthenticated')

const PrivateRoute = ( { component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticated === 'true'
    ? <Component {...props}/>
    : <Redirect to='./Login'/>
  )}/>)


function App() {
  return (
    <Router >
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Yhteystiedot" component={Yhteystiedot}/>
        <Route path="/Login" component={Login}/>
        <PrivateRoute path="/Logged" component={Logged}/>
        <Route exact path="/:tyyppi" component={Products} />
        <Route exact path="/:tyyppi/:id" component={Product} />
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}
export default App;
