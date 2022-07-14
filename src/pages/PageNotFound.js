import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} className='text-center'>
                        <h1 className='text-center'>404! Page not found.</h1>
                        <Nav.Link as={Link} to="/">Go to Home Page</Nav.Link>

                    </Col>
                    <Col md={3}></Col>
                </Row>

            </Container>
        </>
    )
}

export default PageNotFound