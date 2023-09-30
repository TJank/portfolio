import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Janky Robotics, LLC.
                        <p>Janky Robotics Software Services - We do things personal</p>    
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    )
}

export default Footer