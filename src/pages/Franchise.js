import React, { Component } from 'react';
import { FcPhone } from 'react-icons/fc';
import { Container, Row, Col } from 'react-bootstrap';

export default class Franchise extends Component {
  render() {
    return (
      <Container style={{ padding: '2rem 0 3rem 0', width: '80vw' }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h5>
              Want to start an amazing new business... and team up with other
              like-minded entrepreneurs?
            </h5>
            <p>
              <strong>Step one:</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              natus deserunt vitae hic vero a! Quisquam autem ipsam assumenda,
              blanditiis voluptatum iure reiciendis asperiores modi ex omnis
              dignissimos, mollitia perspiciatis vel suscipit quibusdam amet
              vero repellat aut ea neque, tempore quis nesciunt! Sunt dolore
              tempore facilis minima incidunt temporibus explicabo?
            </p>
            <p>
              <strong>Step two:</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              natus deserunt vitae hic vero a! Quisquam autem ipsam assumenda,
              blanditiis voluptatum iure reiciendis asperiores modi ex omnis
              dignissimos, mollitia perspiciatis vel suscipit quibusdam amet
              vero repellat aut ea neque, tempore quis nesciunt! Sunt dolore
              tempore facilis minima incidunt temporibus explicabo?
            </p>
            <p>
              <strong>Step three:</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              natus deserunt vitae hic vero a! Quisquam autem ipsam assumenda,
              blanditiis voluptatum iure reiciendis asperiores modi ex omnis
              dignissimos, mollitia perspiciatis vel suscipit quibusdam amet
              vero repellat aut ea neque, tempore quis nesciunt! Sunt dolore
              tempore facilis minima incidunt temporibus explicabo?
            </p>
            <p>
              <strong>Call our expert for professional help:</strong>
            </p>
            <FcPhone style={{ height: '2rem', width: '3rem' }} />
            &nbsp;Toll free:&nbsp;<strong>0800900900</strong>
          </Col>
        </Row>
      </Container>
    );
  }
}
