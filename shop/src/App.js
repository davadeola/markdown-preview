import React, { Component } from 'react';

import {Routes} from './routes.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

          <h2 className='well'>Welcome to the shop!</h2>
          <Routes/>
        </div>

    );
  }
}

export default App;
