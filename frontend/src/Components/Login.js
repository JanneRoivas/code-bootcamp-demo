import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "./Login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          }
      }




 handleClick(event){
    let payload={
        "username":this.state.username,
        "password":this.state.password
    }
    axios
    .post('/api/Login', payload)
    .then(function (response) {
      /*console.log(response);*/
    if(response !== "true"){
        sessionStorage.setItem('isAuthenticated', true)
        alert("Sisäänkirjautuminen onnistui!"); 
        window.location.assign('./Logged')
    }
    })
    .catch(function (error) {
    alert("Käyttäjätunnus ja salasana eivät täsmää.");
    //sessionStorage.setItem('isAuthenticated',false)
    });
    }
    


render() {
  
    return (
        <React-fragment>
           <h1 className="Title">Kirjaudu sisään</h1>
        <div className="LoginPage">
     
          <MuiThemeProvider >
            <div className>
           
             <TextField
               hintText="Kirjoita käyttäjätunnuksesi" 
               floatingLabelText="Käyttäjätunnus" 
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Kirjoita salasanasi"
                 floatingLabelText="Salasana"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/> <br></br>
               <RaisedButton label="Lähetä" primary={true}  onClick={(event) => this.handleClick(event)}/>
              <br/><br></br>
           </div>
           </MuiThemeProvider>
        </div>
        </React-fragment>
    )
  }
  
}




  
      