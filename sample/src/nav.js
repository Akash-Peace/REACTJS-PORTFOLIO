import React from 'react';
import './font.css';
import './nav.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return(
        <div style={{textAlign: 'center', paddingTop: '15px'}}>
            <NavLink exact className='navtext' activeClassName='navtext active' to='/'> Home </NavLink>
            <NavLink exact className='navtext' activeClassName='navtext active' to='/works'> Works </NavLink>
            <NavLink exact className='navtext' activeClassName='navtext active' to='/about'> About </NavLink>
        </div>
    )
}
export default Navbar