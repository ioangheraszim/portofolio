import React, { useState } from 'react'
import "./Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import logo from "/src/assets/images/logo22.svg"

function Navbar() {

  const [toggleNav, setToggleNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleLink = (link) => {
    setActiveLink(link)
  }

  const openNav = () => {
    setToggleNav(true)
  }

  const closeNav = () => {
    setToggleNav(false)
  }

  return (
    <header>
      <nav className='container navbar'>
        <div  className="logo-container">
          <img src={logo} alt="mister e one logo icon" />
          <a href='#' className="logo">Mr<span>Eone</span></a>
        </div>
        <div className={`nav-container ${toggleNav ? "active" : ""}`}>
          <button aria-label='navbar close' className='nav-button close' onClick={closeNav}><FontAwesomeIcon icon={faX} /></button>
          <ul className='nav-list'>
            <li onClick={closeNav} className={`${toggleNav ? 'from-right active' : 'from-right'}`}>
              <a href="#" 
                onClick={() => handleLink('home')} 
                className={activeLink === 'home' ? 'active' : ''}>
                Home
              </a>
            </li>
            <li onClick={closeNav} className={toggleNav ? 'from-left active' : 'from-left'}>
              <a href="#skills" 
                onClick={() => handleLink('skills')} 
                className={activeLink === 'skills' ? 'active' : ''} >
                Skills
              </a>
            </li>
            <li onClick={closeNav} className={`${toggleNav ? 'from-right active' : 'from-right'}`}>
              <a href="#projects" 
                onClick={() => handleLink('projects')} 
                className={activeLink === 'projects' ? 'active' : ''}>
                Projects
              </a>
            </li>
            <li onClick={closeNav} className={toggleNav ? 'from-left active' : 'from-left'}>
              <a href="#contact" 
                onClick={() => handleLink('contact')} 
                className={activeLink === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='social-icons'>
          <a aria-label='my github' target='_blank' href='https://github.com/ioangheraszim'><FontAwesomeIcon icon={faGithub} /></a>
          <a aria-label='my linkedin' target='_blank' href='https://www.linkedin.com/in/ioan-gheraszim/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <button className='nav-button open' onClick={openNav} aria-label='navbar open'><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar