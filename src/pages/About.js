import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container style={{ padding: '2rem 0 2rem 0', width: '80vw' }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4>How it all started</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laudantium unde, cupiditate accusantium quisquam ad? Rem enim fuga
              dolore dicta ut perferendis aspernatur, quasi minus ipsum impedit
              tempora quis laudantium! Ipsa officia ex hic doloremque
              blanditiis, nostrum dolore ut neque corrupti ullam quos culpa
              dolorum vitae voluptatibus, maiores sequi asperiores?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam optio modi
              temporibus vero tempore? Earum, pariatur consectetur, quod
              dignissimos, placeat quia minima labore voluptatem cupiditate
              sequi exercitationem est velit nihillorem.
            </p>

            <h4>Why you should hire us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laudantium unde, cupiditate accusantium quisquam ad? Rem enim fuga
              dolore dicta ut perferendis aspernatur, quasi minus ipsum impedit
              tempora quis laudantium! Ipsa officia ex hic doloremque
              blanditiis, nostrum dolore ut neque corrupti ullam quos culpa
              dolorum vitae voluptatibus, maiores sequi asperiores?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam optio modi
              temporibus vero tempore? Earum, pariatur consectetur, quod
              dignissimos, placeat quia minima labore voluptatem cupiditate
              sequi exercitationem est velit nihillorem.
            </p>
          </Col>
        </Row>

        <Row className='quote'>
          <Button variant='outline-primary' size='lg'>
            <Link to='/services'>Hire us</Link>
          </Button>
        </Row>
      </Container>
    );
  }
}
