/** @format */

import {
  faInfoCircle,
  faList,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Container, Nav, Navbar as NavbarReactBootstrap} from 'react-bootstrap'

export default function Navbar() {
  return (
    <NavbarReactBootstrap
      bg='dark'
      collapseOnSelect
      expand='lg'
      sticky='top'
      variant='dark'>
      <Container fluid>
        <NavbarReactBootstrap.Brand href='/'>
          Hypensterisk
        </NavbarReactBootstrap.Brand>
        <NavbarReactBootstrap.Toggle />
        <NavbarReactBootstrap.Collapse>
          <Nav defaultActiveKey={1} className='ms-auto'>
            <Nav.Item>
              <Nav.Link eventKey={1} href='#profile'>
                <FontAwesomeIcon icon={faUser} /> Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} href='#about'>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={3} href='#project'>
                <FontAwesomeIcon icon={faList} /> Project
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={4} href='#contact'>
                <FontAwesomeIcon icon={faMessage} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavbarReactBootstrap.Collapse>
      </Container>
    </NavbarReactBootstrap>
  )
}
