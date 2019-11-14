/**
 * Title.js
 * Will Strong; 
 */

import React from 'react';
import { 
    Jumbotron,
    Container
} from 'react-bootstrap';
import styled from 'styled-components';

//assets
import computers from '../images/computers.jpg';

//CSS module
const Styles = styled.div`
    .jumbotron{
        background: url(${computers}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        height: 700px;
        margin-bottom:0px;
        position: relative;
        z-index: -2;
    }
    .title-overlay{
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:-1;
    }
`;

export const Title = () =>(
    <Styles>
        <Jumbotron fluid>
            <div className="title-overlay"></div>
            <Container>
                <h1>Hello, World</h1>
            </Container>
        </Jumbotron>
    </Styles>
)

export default Title;
