import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import homebg from '../images/homebg.jpg';
import home from '../images/homebg1.jpg';
import home2 from '../images/homebg2.jpg';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='slideshow' id='slider'>
          <div className='slideshow-item'>
            <img src={homebg} alt='slider' />
            <div className='slideshow-item-text'>
              <h1>Local Handyman Group </h1>
              <Button variant='outline-secondary' size='lg'>
                <Link to='/location'>Find a Location</Link>
              </Button>
              &nbsp;&nbsp;
              <Button variant='outline-secondary' size='lg'>
                <Link to='/franchise'>Start a Franchise</Link>
              </Button>
            </div>
          </div>

          <div className='slideshow-item'>
            <img src={home} alt='slider' />
            <div className='slideshow-item-text'>
              <h1>Local Handyman Group </h1>
              <Button variant='outline-secondary' size='lg'>
                <Link to='/location'>Find a Location</Link>
              </Button>
              &nbsp;&nbsp;
              <Button variant='outline-secondary' size='lg'>
                <Link to='/franchise'>Start a Franchise</Link>
              </Button>
            </div>
          </div>

          <div className='slideshow-item'>
            <img src={home2} alt='slider' />
            <div className='slideshow-item-text'>
              <h1>Local Handyman Group </h1>
              <Button variant='outline-secondary' size='lg'>
                <Link to='/location'>Find a Location</Link>
              </Button>
              &nbsp;&nbsp;
              <Button variant='outline-secondary' size='lg'>
                <Link to='/franchise'>Start a Franchise</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
