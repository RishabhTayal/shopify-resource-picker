import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ResourcePicker from './ResourcePicker';

class App extends React.Component {
  render() {
    return (
      <div>
        <ResourcePicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
