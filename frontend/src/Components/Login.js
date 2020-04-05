import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';


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
        <div>
          <MuiThemeProvider >
            <div>
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
           </div>
           </MuiThemeProvider>
        </div>
        </React-fragment>
    )
  }
  
}




  
      