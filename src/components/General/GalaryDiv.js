import React from 'react'
import { Col, Image } from 'react-bootstrap';


function GalaryDiv(props) {
    return (
        <>
            <Col lg={3} md={6} sm={12} xs={12} className='pt-3 pb-5'>
                <div className="hover01 column">
                    <div>
                        <figure> <Image className='img-fluid' src={props.ImgSrc} /></figure>
                    </div>
                </div>

            </Col>
        </>
    )
}

export default GalaryDiv