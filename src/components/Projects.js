import React, { Component } from 'react';

import { 
    Button,
    //Carousel,
    Card
 } from 'react-bootstrap';




class Projects extends Component {
    render() {
        return (

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('../images/TicTacToe.jpg')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Projects;