import React from 'react';
import "./Yhteystiedot.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function(props) {
    return (
        <React-fragment>
            <div className="Yhteystietosivu">
                <section className="Yhteystiedot">
                    <h1>Sannan pulla</h1>
                    <p>Osoite: Käpeikkökuja 420<br></br>000666 Helevetti</p>
                </section>
                <section className="Palautelomake">
                <Form>
                    <FormGroup>
                        <Label for="name">Nimi</Label>
                        <Input type="name" name="name" id="name" placeholder="Nimi" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Sähköpostiosoite</Label>
                        <Input type="email" name="email" id="email" placeholder="Sähköpostiosoite (etunimi.sukunimi@posti.com)" />  
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Palaute</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                </section>
            </div>
        </React-fragment>
    )
}