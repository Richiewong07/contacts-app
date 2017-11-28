import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    };
  }

  tablerows() {
    var inputs = this.props.people.map((person) => {
      return (
        <TableRow key={person.name}>
          <TableRowColumn>{person.name}</TableRowColumn>
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
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>State</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.tablerows()}
        </TableBody>
      </Table>
      </div>
    )
  }
}

export default ContactList;
