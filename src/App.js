import React, { Component } from 'react';
import Product from './Product';
import Header from './Header';
//import Projects from './Projects';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>My First React App!</h1>
          <Product />
          <Button variant="primary">Primary</Button>
        </div>
        {/* <Projects/> */}
      </>
    );
  }
}

export default App;
