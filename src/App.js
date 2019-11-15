/**
 * App.js
 * Will Strong; Nov 8, 2019
 * Main App Layout for Portfolio WePage
 */


//React and Bootstrap Headers
import 'holderjs';
import React, { Component } from 'react';

//Components
import Navigator from './components/Navigator';
import Projects from './components/Projects';
import Title from './components/Title';

//Other Resources
import './css/App.css';
import './images/coderTestBg.jpg';
import './images/computers.jpg';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Title/>
          <Navigator />
        </div>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </>
    );
  }
}

export default App;
