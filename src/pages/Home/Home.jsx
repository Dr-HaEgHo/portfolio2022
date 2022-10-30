import React from 'react'
import "./home.css"
import Hero from '../Hero/Hero'
import Showcase from '../Showcase/Showcase'
import Footer from '../../components/Footer/Footer'
import Skills from '../Skills/Skills'


const Home = () => {
  return (
    <div className='home' >
      <Hero />
      <Showcase />
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home