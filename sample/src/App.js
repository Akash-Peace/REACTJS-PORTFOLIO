import React from 'react';
import Navbar from './nav.js';
import Home from './home.js';
import Works from './works.js';
import About from './about.js';
import ParticlesBg from 'particles-bg'
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import './nav.css';
import { MemoryRouter, Route } from 'react-router'; 
import './App.css';
const App = () => {
  const mql = window.matchMedia('(max-width: 600px)');
  let mobileView = mql.matches;
  if (mobileView) {
    return (
      <>
      <MemoryRouter>
        <div>
          <Navbar />
          <Route path='/' component={Home} exact />
          <Route path='/works' component={Works} exact />
          <Route path='/about' component={About} exact />
        </div>
      </MemoryRouter>
      <ParticlesBg color='#ebebeb' num={2} type="circle" bg={true} />
      </>
    );
  } else {
    return (
      <div><center><h1 style={{color: 'tomato', paddingTop: '10%'}}>Sorry, this site is Mobile friendly.</h1><br></br><MobileFriendlyIcon style={{color: 'green', fontSize: '1500%'}}/></center></div>
    );
  }
}

export default App;
