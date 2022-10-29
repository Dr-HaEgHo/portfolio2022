import React from 'react'
import "./header.css"
import CV from "../../assets/resume.pdf"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


const Header = () => {
  return (
    <div className='header'>
      <div className="light"></div>
      <div className="container">
        <div className="nav">
          <div className="hd-home">
            <Link to="/" ><h1>Home</h1></Link>
          </div>
          <ul className="hd-links">
            <Link to="/" ><li>Skills</li></Link>
            <Link to="/" ><li>Showcase</li></Link>
            <Link to="/" ><li>Contact</li></Link>
          </ul>
          <a href={CV} download="resume_Timothy_Awogbuyi" ><button type="submit" className="download__cv">Download cv</button> </a>
          <div className="hd-burger">
            <Icon className='burger-icon' icon="majesticons:menu" />
        </div>
       </div>
      </div>
      
    </div>
  )
}

export default Header;