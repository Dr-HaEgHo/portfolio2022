import React from 'react'
import "./Header.css"
import CV from "../../assets/resume.pdf"
// import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { HashLink as Link} from 'react-router-hash-link';
import { useState } from 'react';


const Header = () => {

  const [trayOpen, setTrayOpen]  = useState(false)

  const toggleTray = () => {
    setTrayOpen(!trayOpen)
  }

  return (
    <div className='header'>
      <div className="light"></div>
      <div className="container">
        <div className="nav">
          <div className="hd-home">
            <Link to="#hero" smooth><h1>Home</h1></Link>
          </div>
          <ul className="hd-links">
            <Link to="#skills" smooth ><li>Skills</li></Link>
            <Link to="#showcase" smooth ><li>Showcase</li></Link>
            <Link to="#contact" smooth ><li>Contact</li></Link>
          </ul>
          <a href={CV} download="resume_Timothy_Awogbuyi" ><button type="submit" className="download__cv">Download cv</button> </a>
          <div onClick={toggleTray} className="hd-burger">
            <Icon className='burger-icon' icon="majesticons:menu" />
        </div>
       </div>
      </div>
      
      <div style={{height: trayOpen ? "100vh" : "0" }} className="navTray">
        <ul style={{display: trayOpen ? "flex" : "none"}} className="hd-nav-links">
          <Link to="#skills" smooth ><li onClick={toggleTray} >Skills</li></Link>
          <Link to="#showcase" smooth ><li onClick={toggleTray} >Showcase</li></Link>
          <Link to="#contact" smooth ><li onClick={toggleTray} >Contact</li></Link>
          <a href={CV} download="resume_Timothy_Awogbuyi" ><button type="submit" className="download_nav_cv">Download cv</button> </a>
        </ul>
      </div>
    </div>
  )
}

export default Header;