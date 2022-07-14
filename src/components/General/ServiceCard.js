import React from 'react'
import { Col, Image, Card } from 'react-bootstrap';

function ServiceCard(props) {
    return (
        <>
            <Col lg={3} md={6} sm={12} xs={12} className='pt-3 pb-5'>
                <Card className='custom-service-card'>
                    <Image className='img-fluid service-card-img' src={props.ImgSrc} />
                    <div className='home-service-sub-div'>
                        <p className='home-service-heading'>{props.CardTitle}</p>
                        <p className='home-service-text'>{props.CardBody}</p>
                    </div>

                </Card>

            </Col>
        </>
    )
}

export default ServiceCard