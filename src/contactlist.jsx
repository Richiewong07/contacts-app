import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.contacts = props.contacts
  }

  render() {
    return(
      <ul>
        <li>Name: {} </li>
        <li>Email: {} </li>
        <li>Phone Number: {} </li>
        <li>Address: {} </li>
        <li>City: {} </li>
        <li>State: {} </li>
        <li>Zip Code: {} </li>
      </ul>
    )
  }
}


export default ContactList;
