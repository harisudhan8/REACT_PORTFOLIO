import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className="logo"/>
        <div className='desktopMenu'>
            <Link  to='/components/Intro/intro' className='desktopMenuListItem'>Home</Link>
            <Link to='/components/Skills/skills' className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <Link to='/components/Contact/contact'>
    <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
    </button>
</Link>
    </nav>

  )
}

export default Navbar;