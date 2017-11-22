import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ContactList from './contactlist';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import './myform.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      name: '',
      email: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
    };
  }


  // update_name (event) {
  //   console.log(event.target);
  //   this.setState({name: event.target.value});
  // }
  //
  // update_color (event) {
  //   console.log(event.target);
  //   this.setState({color: event.target.value});
  // }

  update_state (event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }

  // update_select = (event, index, value) => {
  //   this.setState({color: value});
  // }

  handle_submit(event) {
    console.log('Submitted: ' , this.state);
    event.preventDefault();

    var contact_info = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      city: this.state.address,
      state: this.state.state,
      zip_code: this.state.zip_code,
    }

    var contact = this.state.contact;
    contact.push(contact_info);
    console.log(contact);

  }

  render() {
    return (
      <div>
        <AppBar title = "My Contact From"/>
        <Card className = "md-card">

          <form onSubmit={event => this.handle_submit(event)}>
            <CardTitle title="My Form" subtitle="Contact Info"/>

            <CardText>
              <TextField
                floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
              <br/>
              <TextField
                floatingLabelText="Your Email"
                defaultValue={this.state.email}
                onChange={event => this.update_state(event, 'email')}/>
              <br/>
              <TextField
                floatingLabelText="Your Phone Number"
                defaultValue={this.state.phone_number}
                onChange={event => this.update_state(event, 'phone_number')}/>
              <br/>
              <TextField
                floatingLabelText="Your Address"
                defaultValue={this.state.address}
                onChange={event => this.update_state(event, 'address')}/>
              <br/>
              <TextField
                floatingLabelText="Your City"
                defaultValue={this.state.city}
                onChange={event => this.update_state(event, 'city')}/>
              <br/>
              <TextField
                floatingLabelText="Your State"
                defaultValue={this.state.state}
                onChange={event => this.update_state(event, 'state')}/>
              <br/>
              <TextField
                floatingLabelText="Zip Code"
                defaultValue={this.state.zip_code}
                onChange={event => this.update_state(event, 'zip_code')}/>
              <br/>
            </CardText>
            <CardActions>
              <RaisedButton type= "submit"label="Submit" primary={true}/>
            </CardActions>
          </form>
        </Card>
        <ContactList people={this.state.contact}/>
      </div>

    );
  }
}




export default ContactForm;
