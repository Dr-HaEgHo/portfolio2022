import React from 'react'
import "./hero.css"
import { introdata } from '../../content_option';
import Typewriter from "typewriter-effect"
import { HashLink as Link} from 'react-router-hash-link';
import myself from "../../assets/myself.gif"

const Hero = () => {
  return (
      <div className='hero' id='hero'>
          <div className="container">
              <div className="hr">
                  <div className="hr-image" >
                      <img src={myself} alt="myself.gif" />
                  </div>
                  <div className="hr-content">
                      <h1>{introdata.title}</h1>
                      <h2>
                          <Typewriter
                            options={{
                                strings: [
                                  introdata.animated.first,
                                  introdata.animated.second,
                                  introdata.animated.third,
                                ],
                                autoStart: true, 
                                loop: true,
                                deleteSpeed: 10,
                              }}
                          />
                      </h2>
                      <p>{introdata.description}</p>
                      <div className="hr-buttons">
                            <Link to="#showcase" smooth className="text_2">
                              <button className="home-portfolio-btn">My Works</button>
                            </Link>
                            <Link to="#skills" smooth>
                              <button className="home-contact-btn">About Me</button>
                            </Link>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Hero