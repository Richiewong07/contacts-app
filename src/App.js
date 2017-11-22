import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue300} from 'material-ui/styles/colors';

import ContactForm from './contactform';
// import ContactList from './contactlist';

const theme = getMuiTheme({
  palette: {primary1Color: blue300}
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme} >
        <ContactForm/>
        {/* <ContactList/> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
