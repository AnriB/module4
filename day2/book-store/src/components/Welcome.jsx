import React, { Component } from 'react';

import {Container, Jumbotron} from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return(
            <Jumbotron>
            <Container>
                <h1>Online Bookstore</h1>
                <p>
                This is my new Bookstore!
                </p>
            </Container>
            </Jumbotron>
        )
    }
}
export default Welcome;