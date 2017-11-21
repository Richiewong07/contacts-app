import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './myform.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.contacts = props.contacts;
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      color: 'blue'
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

  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  handleSubmit(event) {
    console.log('Submitted: ' , this.state);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          var contacts = this.state
          <label>Your Name?</label>
          <input type="text" value={this.state.name}
            onChange={event => this.update_state(event, 'name')}/>
          <hr/>
          <label>Your Email?</label>
          <input type="text" value={this.state.email}
            onChange={event => this.update_state(event, 'email')}/>
          <hr/>
          <label>Your Phone Number?</label>
          <input type="text" value={this.state.phone_number}
            onChange={event => this.update_state(event, 'phone_number')}/>
          <hr/>
          <select value={this.state.color}
            onChange={event => this.update_state(event, 'color')}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
          <hr/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

      // <div>
      //   <AppBar title = "My Contact From"/>
      //   <Card className = "md-card">
      //
      //     <form onSubmit={event => this.handleSubmit(event)}>
      //       <CardTitle title="My Form" subtitle="subtitle"/>
      //
      //       <CardText>
      //         <TextField
      //           floatingLabelText="Your Name"
      //           defaultValue={this.state.name}
      //           onChange={event => this.update_state(event, 'name')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Your Email"
      //           defaultValue={this.state.email}
      //           onChange={event => this.update_state(event, 'email')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Your Phone Number"
      //           defaultValue={this.state.phone_number}
      //           onChange={event => this.update_state(event, 'phone_number')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Your Address"
      //           defaultValue={this.state.address}
      //           onChange={event => this.update_state(event, 'address')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Your City"
      //           defaultValue={this.state.city}
      //           onChange={event => this.update_state(event, 'city')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Your State"
      //           defaultValue={this.state.state}
      //           onChange={event => this.update_state(event, 'state')}/>
      //         <br/>
      //         <TextField
      //           floatingLabelText="Zip Code"
      //           defaultValue={this.state.zip_code}
      //           onChange={event => this.update_state(event, 'zip_code')}/>
      //         <br/>
      //
      //         <SelectField
      //           floatingLabelText="Color"
      //           value={this.state.color}
      //           onChange={this.update_select}
      //         >
      //           <MenuItem value="red" primaryText="Red" />
      //           <MenuItem value="blue" primaryText="Blue" />
      //         </SelectField>
      //       </CardText>
      //
      //       <CardActions>
      //         <RaisedButton label="Submit" primary={true}/>
      //       </CardActions>
      //
      //     </form>
      //   </Card>
      // </div>


export default ContactForm;
