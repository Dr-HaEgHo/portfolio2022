import React from 'react'
import "./show.css"

const Show = ({ image, title, description, github, demo }) => {
  return (
    <div className='show'>
          <div className="caro-container">
              <div className="caro-img">
                    <img src={image} alt="" />
              </div>
              <div className="caro-cont">
                  <div className='caro-cont-text'>
                      <h1>{title}</h1>
                      <p>{ description }</p>
                  </div>
                  <div className="caro-cont-buttons">
                      <a href={demo} target='blank' ><button className='home-portfolio-btn'>Demo</button></a>
                      <a href={github} target='blank' ><button className='home-contact-btn'>GitHub Repo</button></a>
                  </div>
              </div>
          </div>
          <div className="caro-dots"></div>
    </div>
  )
}

export default Show