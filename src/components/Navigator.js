/**
 * Navbar.js
 * Will Strong; Nov 7, 2019
 * NavBar for React/Bootstrap WebPage
 */

import React from 'react';
import {
    Navbar,
    NavDropdown,
    Nav
} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color:blue;
        position: relative;
        width: 100%;
        z-index: 1;
        margin:0;
    }
`;

export const Navigator = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Will Strong</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default Navigator;