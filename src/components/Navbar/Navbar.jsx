import React, { useState } from 'react'
import "./Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
function Navbar() {

  const [toggleNav, setToggleNav] = useState(false);

  const openNav = () => {
    setToggleNav(true)
  }

  const closeNav = () => {
    setToggleNav(false)
  }

  return (
    <header>
      <nav className='container navbar'>
        <div>
          <a href=''>MrEone</a>
        </div>
        <div className={`nav-container ${toggleNav ? "active" : ""}`}>
          <button className='nav-button close' onClick={closeNav}><FontAwesomeIcon icon={faX} /></button>
          <ul className='nav-list'>
            <li onClick={closeNav} className={`${toggleNav ? 'from-right active' : 'from-right'}`}><a href="">Home</a></li>
            <li onClick={closeNav} className={toggleNav ? 'from-left active' : 'from-left'}><a href="">Skills</a></li>
            <li onClick={closeNav} className={`${toggleNav ? 'from-right active' : 'from-right'}`}><a href="">Projects</a></li>
            <li onClick={closeNav} className={toggleNav ? 'from-left active' : 'from-left'}><a href="">Contact</a></li>
          </ul>
        </div>
        <div className='social-icons'>
          <a target='_blank' href=''><FontAwesomeIcon icon={faGithub} /></a>
          <a target='_blank' href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <button className='nav-button open' onClick={openNav} aria-label='navbar open'><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar