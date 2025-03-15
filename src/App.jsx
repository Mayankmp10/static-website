import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Mann from './components/Mann.jsx'
import BootstrapCarousel from './components/Carousel.jsx'
import CategoryMenu from './components/CategoryMenu.jsx'


function App() {
  return (
    <>
      <Mann />
      <Navbar />
      <CategoryMenu />
      <BootstrapCarousel />
    </>
  )
}

export default App
