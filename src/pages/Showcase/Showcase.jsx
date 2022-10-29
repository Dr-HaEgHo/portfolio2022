import React from 'react'
import "./showcase.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { dataportfolio } from '../../content_option'
import Show from '../../components/Show/Show'

const Showcase = () => {
  return (
      <div className='showcase'>
          <div className="container">
              <div className="sc">
                  <Carousel
                    className="port-swiper"
                    autoPlay={true}
                    infiniteLoop={true}
                    loop={true}
                    swipeable={true} 
                    showStatus={false}
                    showThumbs={false}
                  >
                    {
                    dataportfolio?.map((item, i) => (
                        <div key={i} className="each-slide">
                        <Show
                          image={item.img}
                          title={ item.title}
                          description={ item.description }
                          github={item.github}
                          demo={item.demo}
                        />
                        </div>
                      ) )
                    }
                  </Carousel>
              </div>
          </div>
    </div>
  )
}

export default Showcase