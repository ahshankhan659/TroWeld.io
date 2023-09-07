import React from 'react'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Testimonials from './Components/Testimonials/Testimonials'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
    <Footer/>
    </>
  )
}

export default App