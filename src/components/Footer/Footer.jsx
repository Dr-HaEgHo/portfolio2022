import React from 'react'
import "./footer.css"
import { Icon } from '@iconify/react';
import {socialprofils} from "../../content_option" 

/* <a href={}></a> */

const Footer = () => {
  return (
    <div className="footer">
        <p>follow me</p>
        <hr />
        <div className="ft-icons">
          <a href={socialprofils.github} target="blank"><Icon className='footer-icon' icon="eva:github-fill" /></a>
          <a href={socialprofils.linkedin} target="blank"><Icon className='footer-icon' icon="ion:logo-linkedin" /></a>
          <a href={socialprofils.twitter} target="blank"><Icon className='footer-icon' icon="icomoon-free:twitter" /></a>
        </div>
    </div>
  )
}

export default Footer