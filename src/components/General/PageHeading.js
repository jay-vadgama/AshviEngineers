import React from 'react'
import { Container } from 'react-bootstrap';

function PageHeading(props) {
    return (
        <Container className='page-heading'>
            <h2 className='text-center custom-color'>{props.PageTitle}</h2>
            <div className='center'>
                <hr className='custom-hr' />
            </div>
        </Container>
    )
}

export default PageHeading;