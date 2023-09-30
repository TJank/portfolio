import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function NavEmployee() {

    const userInfo = null

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        // dispatch(logout())
        console.log('logout');
        navigate('/')
    }


    return (
        <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary' bg="primary" expand="lg" collapseOnSelect>
            <Container fluid>
                <Nav className="m-auto">
                    <Navbar.Brand ><i className="fa-sharp fa-solid fa-robot"></i> JankyRobotics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <LinkContainer to='/jrss/employee/home'>
                            <Nav.Link><i className="fa-sharp fa-solid fa-home"></i> Home</Nav.Link>
                        </LinkContainer>

                        {userInfo.is_manager ? 
                            <LinkContainer to='/jrss/employee/users'>
                                <Nav.Link><i className="fa-solid fa-users"></i> User Managment</Nav.Link>
                            </LinkContainer>
                            : null
                        }

                        {userInfo.is_manager ? 
                            <LinkContainer to='/jrss/invoices'>
                                <Nav.Link><i className="fa fa-solid fa-book"></i> Invoices</Nav.Link>
                            </LinkContainer>
                            : null
                        }



                        {userInfo.is_manager ? 
                            <LinkContainer to='/jrss/client/companies'>
                                <Nav.Link><i className="fa fa-solid fa-briefcase"></i> Client Companies</Nav.Link>
                            </LinkContainer>
                            : null
                        }

                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/jrss/employee/profile'>
                                <NavDropdown.Item>
                                    <i className="fa fa-user"> </i> Profile
                                </NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Item onClick={logoutHandler}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Nav> 
            </Container>
        </Navbar>
    )
}

export default NavEmployee