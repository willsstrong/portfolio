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
        width:100%;
        height: 100vh;
        margin-bottom:0px;
        position: relative;
        z-index: -2;
        top: 0;
    }
    .title-overlay{
        background-color: black;
        opacity: 0.75;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index:-1;
    }

    .title-header{
        margin:100px;
        width: 600px;
        height: 50%;    
    }
    .title-footer{
        text-align: center;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 20px;
        width: 100% ;
    }
    h1{
        font-family: 'Lucida Console';
        font-size: 60px;
        margin-bottom: 20px;

    }
    #cursor {
        background: white;
        line-height: 60px;
        width: 6px;
        height: 60px;
        margin-bottom: 20px;
        animation: blink 1.5s step-end infinite;
    }
    @keyframes blink{
        0% { opacity: 1.0; }
        50% { opacity: 0.0; }
        100% { opacity: 1.0; }
    }
`;

export const Title = () => (
    <Styles>
        <Jumbotron fluid>
            <div className="title-overlay"></div>
            <Container className="title-header">
                <h1>Hello, World!</h1>
                <div id="cursor"></div>
                <h3>My name is Will Strong, and I love to code!</h3>
                <p> Whether it's writing a desktop application for managing a customer database;<br/>
                    creating visually stunning web apps;<br/>
                    or going to bare metal with Assembly or C,
                    I find great fullfilment in the science and art of software engineering.
                </p>
                <p>Yes. This is actually a picture of my desktop</p>
            </Container>
            <Container className="title-footer">
                <p>Please keep scrolling to find out more about me and what I've been working on</p>
                V
            </Container>
        </Jumbotron>
    </Styles>
)

export default Title;
