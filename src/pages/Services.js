import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { MdPower } from 'react-icons/md';
import { FiRefreshCcw } from 'react-icons/fi';
import { GiTap, GiDamagedHouse, GiAutoRepair } from 'react-icons/gi';
import {
  FaHammer,
  FaPaintRoller,
  FaSwimmingPool,
  FaCut,
  FaHandshake,
} from 'react-icons/fa';

export default class Services extends Component {
  render() {
    return (
      <Container style={{ padding: '2rem 0 0 0' }}>
        <Row>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <MdPower
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Electrical Installations</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <GiTap style={{ height: '2rem', width: '3rem', color: 'teal' }} />
              <br />
              <span>Plumbing Services</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FaHammer
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Carpentry</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FaPaintRoller
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Pro-Painting</span>
            </div>
          </Col>
        </Row>

        <Row style={{ padding: '2rem 0 0 0' }}>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FaCut style={{ height: '2rem', width: '3rem', color: 'teal' }} />
              <br />
              <span>Lawn Mowing</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FiRefreshCcw
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Cesspool Emptying</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FaSwimmingPool
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Swimming Pool</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <GiDamagedHouse
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>House Renovations</span>
            </div>
          </Col>
        </Row>

        <Row style={{ padding: '2rem 0 0 0' }}>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <FaHandshake
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Apprenticeship</span>
            </div>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <div className='text-center'>
              <GiAutoRepair
                style={{ height: '2rem', width: '3rem', color: 'teal' }}
              />
              <br />
              <span>Servicing</span>
            </div>
          </Col>
        </Row>

        <Row className='quote'>
          <Button variant='outline-primary' size='lg'>
            <Link to='/services'>Request a quotation</Link>
          </Button>
        </Row>
      </Container>
    );
  }
}
