/**
 * App.js
 * Will Strong; Nov 8, 2019
 * Main App Layout for Portfolio WePage
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs';

import React, { Component } from 'react';
import {
  Jumbotron,
  //JumbotronProps,
  //Container 
} from 'react-bootstrap';

import Header from './Header';
import Projects from './Projects';


class App extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron fluid>
            <h1>My First React App!</h1>
          </Jumbotron>
          <Header />
        </div>

        <Projects />
      </>
    );
  }
}

export default App;
