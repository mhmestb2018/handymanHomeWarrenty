import React from 'react';
//import './App.css';
import './styles/App.scss';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise';
import Location from './pages/Location';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/franchise' component={Franchise}></Route>
        <Route exact path='/location' component={Location}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
