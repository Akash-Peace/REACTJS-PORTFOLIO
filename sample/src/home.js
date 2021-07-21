import React from 'react';
import './home.css';
import Img from './akash.png'
const Home = () => {
    return(
        <div className='fullscreen'>
            <div className='fortext'>
                <h2 className='hi'>Hi , I'm</h2> 
                <h1 className='akash'>Akash .A</h1>
            </div>
            <div className='resize'>
                <img className='img' src={Img} alt='Akash.A pic' />
            </div>
        </div>
    )
}
export default Home