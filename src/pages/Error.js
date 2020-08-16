import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Error extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className='error'>
            <h3>It is not your fault that this page can not be found</h3>
          </div>
          <div className='error-btn'>
            <Link to='/'>
              <button className='btn btn-outline-secondary'>Return home</button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
