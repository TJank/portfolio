import {useRef} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function NavDefault() {
  const mobileNav = useRef(null);
  const nav = useRef(null);

  const openNav = () => {
    nav.current.style.left = "0px"
  }
  const closeNav = () => {
    nav.current.style.left = "-100%"
  }

  return (
    <div>
      <div className='mobile-nav'><i onClick={openNav} className='fa fa-bars fa-xl'></i></div>
      <nav ref={nav}> 
        <i onClick={closeNav} className='fa fa-times fa-xl'></i>
        <ul> 
          <li>
            <LinkContainer onClick={closeNav} to='/'>
              <Nav.Link><i className="fa fa-home"></i> Home</Nav.Link>
            </LinkContainer>
          </li>

          <li className='navItem'>
            <LinkContainer onClick={closeNav} to='/services'>
              <Nav.Link><i className="fa fa-cogs"></i> Services</Nav.Link>
            </LinkContainer>
          </li>
          
          <li className='navItem'>
            <LinkContainer onClick={closeNav} to='/about'>
              <Nav.Link><i className="fa-sharp fa-solid fa-circle-question"></i> About</Nav.Link>
            </LinkContainer>
          </li>
          
          <li className='navItem'>
            <LinkContainer onClick={closeNav} to='/contact'>
              <Nav.Link><i className="fa-solid fa-address-book"></i> Contact</Nav.Link>
            </LinkContainer>
          </li>
        </ul>
      </nav>
      
  </div>
  )
}

export default NavDefault