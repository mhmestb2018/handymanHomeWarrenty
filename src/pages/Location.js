import React, { Component } from 'react';
import { FcPhone } from 'react-icons/fc';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Location extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '2rem 0 0 0' }}>
          <h5>
            Covid Caution: All our physical offices are closed til further
            notice.
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus deserunt vitae hic vero a! Quisquam autem ipsam assumenda,
            blanditiis voluptatum iure reiciendis asperiores modi ex omnis
            dignissimos, mollitia perspiciatis vel suscipit quibusdam amet vero
            repellat aut ea neque, tempore quis nesciunt! Sunt dolore tempore
            facilis minima incidunt temporibus explicabo?
          </p>
          <p>
            <strong>Call our expert for professional help:</strong>
          </p>
          <FcPhone style={{ height: '2rem', width: '3rem' }} />
          &nbsp;Toll free:&nbsp;<strong>0800900900</strong>
          <br />
          <br />
          <p>
            <strong>Emergency help:</strong>
          </p>
          <FcPhone style={{ height: '2rem', width: '3rem' }} />
          &nbsp;Toll free:&nbsp;<strong>0800400400</strong>
          <p style={{ paddingTop: '3rem' }}>
            <strong>Alternatively get social:</strong>
          </p>
          <Link to='/'>
            <FaTwitter
              style={{ height: '2rem', width: '3rem', color: 'teal' }}
            />
          </Link>
          <Link to='/'>
            <FaFacebookF
              style={{ height: '2rem', width: '3rem', color: 'teal' }}
            />
          </Link>
          <Link to='/'>
            <AiFillInstagram
              style={{ height: '2rem', width: '3rem', color: 'teal' }}
            />
          </Link>
          <p style={{ paddingTop: '3rem' }}></p>
        </Container>
      </div>
    );
  }
}
