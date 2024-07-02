import { useState } from 'react'
import './App.css'
import Menu   from './components/Menu'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner image = {"Banner3.jpg"}></Banner>
      <Menu></Menu>
      <Footer></Footer>
    </>
  )
}

export default App
