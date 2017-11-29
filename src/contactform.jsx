import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
// import ContactList from './contactlist';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './myform.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {name: 'Richie', email: 'richiewong07@yahoo.com', phone_number: '281-702-7171', address: '2422 Hartman Dr.', city: 'Sugar Land', state: 'Texas', zip_code: '77478'},
        {name: 'Ann', email: 'ann@yahoo.com', phone_number: '123-456-7890', address: '123 Main St.', city: 'Houston', state: 'Texas', zip_code: '77038'},
        {name: 'Calvin', email: 'calvin@yahoo.com', phone_number: '098-765-4321', address: '987 Main St.', city: 'Houston', state: 'Texas', zip_code: '77083'}
        ],
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

    var person = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip_code: this.state.zip_code,
    }

    var contact = this.state.contact;
    contact.push(person);
    this.setState({contact: contact})

    contact.sort(function(a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    })

    console.log('Contact Info', this.state.contact);
  }


  display_rows() {
    var inputs = this.state.contact.map((person) => {
      return (
        <TableRow key={person.name}>
          <TableRowColumn>{person.name}
          </TableRowColumn>
          <TableRowColumn>{person.city}</TableRowColumn>
          <TableRowColumn>{person.state}</TableRowColumn>
        </TableRow>
      )
    });
    return inputs;
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
              <TextField
                floatingLabelText="Your Phone Number"
                defaultValue={this.state.phone_number}
                onChange={event => this.update_state(event, 'phone_number')}/>
              <TextField
                floatingLabelText="Your Address"
                defaultValue={this.state.address}
                onChange={event => this.update_state(event, 'address')}/>
              <br/>
              <TextField
                floatingLabelText="Your City"
                defaultValue={this.state.city}
                onChange={event => this.update_state(event, 'city')}/>
              <TextField
                floatingLabelText="Your State"
                defaultValue={this.state.state}
                onChange={event => this.update_state(event, 'state')}/>
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
        {/* <ContactList people={this.state.contact}/>
      </div> */}
      {/* <div> */}
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>State</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.display_rows()}
        </TableBody>
      </Table>
      <CardActions>
        <RaisedButton type= "submit"label="Delete" primary={true}/>
        <RaisedButton type= "submit"label="Edit" primary={true}/>
      </CardActions>
      </div>

    );
  }
}



export default ContactForm;
