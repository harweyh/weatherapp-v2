import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/weather';
import Forecast from './components/forecast';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }

  render() {
    return (
      <div>
        <h1>Current Weather at Helsinki:</h1>
        <Weather />
        <Forecast />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
