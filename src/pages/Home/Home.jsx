import React from 'react'
import "./home.css"
import Hero from '../Hero/Hero'
import Showcase from '../Showcase/Showcase'
import Footer from '../../components/Footer/Footer'
import Skills from '../Skills/Skills'
import Header from '../../components/Header/Header'


const Home = () => {
  console.log(window.location.pathname)

  return (
    <div className='home' >
      <Header/>
      <Hero />
      <Showcase />
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home
  
  