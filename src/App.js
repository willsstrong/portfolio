/**
 * App.js
 * Will Strong; Nov 8, 2019
 * Main App Layout for Portfolio WePage
 */


//React and Bootstrap Headers
import 'holderjs';
import React, { Component } from 'react';
import {
  Jumbotron,
  Image 
} from 'react-bootstrap';

//Components
import Navigator from './components/Navigator';
import Projects from './components/Projects';

//Other Resources
import './css/App.css';
import './images/coderTestBg.jpg';
import './images/computers.jpg';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron bsPrefix>
            <Image src={require("./images/computers.jpg")} fluid/>
          </Jumbotron>
          <Navigator/>
        </div>
        <div id='test'>
          fdfas
        </div>
        <Projects />
      </>
    );
  }
}

export default App;
