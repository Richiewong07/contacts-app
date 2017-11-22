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
      selected: [1],
    };
  }

  tablerows(props) {
    const people = this.props.people.map((person) =>
      <TableRow> key={person.name}>
        <TableRowColumn>{person.name}</TableRowColumn>
      </TableRow>
    )
    return people;
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
          <TableRow>
            
          </TableRow>
        </TableBody>
      </Table>
      </div>
    )
  }
}


export default ContactList;
