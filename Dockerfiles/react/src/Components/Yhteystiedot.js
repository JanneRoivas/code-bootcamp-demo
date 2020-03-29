import React from 'react';
import "./Yhteystiedot.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Yhteystiedot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }

    handleSubmit(e) {
        e.preventDefault();
    
        fetch('api/Yhteystiedot',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Viesti lähetetty."); 
            this.resetForm()
          }else if(response.status === 'fail'){
            alert("Viestin lähetys epäonnistui.")
          }
        })
      }

      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
     }
    render(){
    return (
        <React-fragment>
            <div className="Yhteystietosivu">
                <section className="Yhteystiedot">
                    <h1>Sannan pulla</h1>
                    <p>Osoite: Vääräkuja 6b<br></br>987654 Huijari</p>
                </section>
                <section className="Palautelomake">
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <FormGroup>
                        <Label for="name">Nimi</Label>
                        <Input type="name" name="name" id="name" placeholder="Nimi" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Sähköpostiosoite</Label>
                        <Input type="email" name="email" id="email" placeholder="Sähköpostiosoite (etunimi.sukunimi@posti.com)" value={this.state.email} onChange={this.onEmailChange.bind(this)} />  
                    </FormGroup>
                    <FormGroup style={{height:'180px'}}>
                        <Label for="exampleText">Palaute</Label>
                        <Input style={{height:'160px'}} type="textarea" name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                </section>
            </div>
        </React-fragment>
    )
}}