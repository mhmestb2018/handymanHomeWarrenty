import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHireAHelper } from 'react-icons/fa';

export default class NavbarMenu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg'>
        {' '}
        <Container>
          <Navbar.Brand href='/'>
            <FaHireAHelper style={{ color: 'white' }} />
            <span style={{ color: 'white' }}>&nbsp;HANDYMAN&reg;</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <hr></hr>
            <Nav>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
