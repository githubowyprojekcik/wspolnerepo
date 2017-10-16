import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <div>Click to pick a date:</div>
          <button class="date-pick-button" value="Pick Date">
            
          <DatePicker/>
          </button>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
