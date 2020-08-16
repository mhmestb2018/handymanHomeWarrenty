import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className='footer'>
        <span>HandyMan&nbsp;</span>&copy;{new Date().getFullYear()}
        .&nbsp;<span>All Rights Reserved</span>
      </Container>
    );
  }
}
