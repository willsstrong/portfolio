/**
 * App.js
 * Will Strong; Nov 8, 2019
 * Main App Layout for Portfolio WePage
 */

 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'holderjs';

import React, { Component } from 'react';
import { 
  Button, 
  Image, 
  Row, 
  Col, 
  Container 
} from 'react-bootstrap';

import Product from './Product';
import Header from './Header';
import Projects from './Projects';


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
        <Projects />
        <div>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
