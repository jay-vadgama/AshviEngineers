import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import PageHeading from '../components/General/PageHeading';
import drill from './Image/Drill.jpg'
import pattern from './Image/Pattern.jpeg'
import metal from './Image/metal.jpg'
import wooden from './Image/Wooden_Work.jpeg'


function Galary() {
    return (

        <div className='mt-5 galarypage-div'>
            <PageHeading PageTitle='Galary' />
            <Container >

                <Row>
                    <Col lg={4} md={12} className="mb-4 mb-lg-0">
                        <Image
                            src={pattern}
                            className="w-100 shadow-1-strong rounded mb-4"

                        />

                        <Image
                            src={metal}

                            className="w-100 shadow-1-strong rounded mb-4"

                        />
                    </Col>

                    <Col lg={4} className="mb-4 mb-lg-0">
                        <Image
                            src={wooden}

                            className="w-100 shadow-1-strong rounded mb-4"

                        />

                        <Image
                            src={metal}

                            className="w-100 shadow-1-strong rounded mb-4"

                        />
                    </Col>

                    <Col lg={4} className="mb-4 mb-lg-0">
                        <Image
                            src={metal}

                            className="w-100 shadow-1-strong rounded mb-4"

                        />

                        <Image
                            src={wooden}
                            className="w-100 shadow-1-strong rounded mb-4"

                        />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Galary