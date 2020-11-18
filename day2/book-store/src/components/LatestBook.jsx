import React, { Component } from 'react';
import bookpics from '../fantasy.json'
import {Container, Row, Col, Carousel} from 'react-bootstrap';

class LatestBook extends Component {
    render() {
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={8}>
                        <p className="lead">Latest Books on Store:</p>
                        <Carousel>
                            {bookpics.map((bookpic) => (
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={bookpic.img}
                                    alt={bookpic.category}
                                    />
                                    <Carousel.Caption>
                                        <h3>{bookpic.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestBook;
