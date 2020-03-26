import React from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import './App.css'
import Yhteystiedot from './Components/Yhteystiedot'

=======
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Products from './Components/Products'
import Product from './Components/Product'
import './App.css'
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote



function App() {
  return (
    <Router >
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
<<<<<<< HEAD
        <Route exact path="/Yhteystiedot" component={Yhteystiedot}/>
=======
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote
        <Route exact path="/:tyyppi" component={Products} />
        <Route exact path="/:tyyppi/:id" component={Product} />
        <Route render={() => "404 - Not Found!"}/>
      </Switch>
    </Router>
  );
}
export default App;
