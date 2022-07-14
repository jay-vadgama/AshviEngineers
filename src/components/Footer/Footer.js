import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { BsPhone, BsPerson } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocationCity } from 'react-icons/md'

function Footer() {
    return (
        <>
            <Container fluid className='footer-div'>

                <Container fluid className='footer-sub-div'>

                    <Row className='margin-right'>
                        <Col lg={3} md={6} sm={6}>
                            <h4><p className='mt-5'><b>Important Links</b></p></h4>
                            <hr className='custom-hr' />
                            <Nav.Link className='custom-link' as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link className='custom-link' as={Link} to="/services" >Our Services</Nav.Link>
                            <Nav.Link className='custom-link' as={Link} to="/galary" >Galary</Nav.Link>
                            <Nav.Link className='custom-link' as={Link} to="/about" >About us</Nav.Link>

                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <h4><p className='mt-5'><b>Contact us</b></p></h4>
                            <hr className='custom-hr' />
                            <div>
                                <p><BsPerson /> Sameer Kharecha</p>
                                <p><BsPhone /> 98984 71706</p>
                            </div>
                            <hr />
                            <div>
                                <p><BsPerson /> Umesh Makvana</p>
                                <p><BsPhone /> 99041 97043</p>
                            </div>
                            <hr />
                            <p className='text-white'><AiOutlineMail /> ashviengineers2710@gmail.com </p>
                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <h4><p className='mt-5'><b>Address</b></p></h4>
                            <hr className='custom-hr' />
                            <p className='footer-address-p'><MdOutlineLocationCity /> Plot No. 9, Revenue Survey No. 642, Surbhi Industrial Zone-2, Shed No. 3,
                                Ravki, Lodhika, Rajkot - 360035, Gujarat.</p>
                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <h4><p className='mt-5'><b>Location</b></p></h4>
                            <hr className='custom-hr' />
                            <div className='d-flex justify-content-center'>

                                <iframe className="responsive-iframe"
                                    title="This is a unique title"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.5940376518793!2d70.71391011490368!3d22.17951998538645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395833299644af5f%3A0xd23f8440b4a0be1f!2sAshvi%20Engineers!5e0!3m2!1sen!2sin!4v1657731741148!5m2!1sen!2sin"
                                    width="250"
                                    height="250"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                />
                            </div>

                        </Col>
                    </Row>
                    <div className='center mt-5'>
                        <hr className='custom-hr-1' />

                    </div>
                    <div className='center'>
                        <p className='custom-margin'>Copyright © 2022 Ashvi Engineers. All rights reserved.</p>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Footer