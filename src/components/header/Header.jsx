import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'


const Header = () => {
  return (
    <>
        <header>
          <a href="index.html"
            ><img src="assets/images/logo.png" alt="logo" title="Home"
          /></a>
          
          <Navbar />
          
          <i
            className="fa-solid fa-bars"
            id="open-mobile-nav"
            // onclick="open_mobile_nav()"
          ></i>
          <i
            className="fa-solid fa-xmark"
            id="close-mobile-nav"
            // onclick="close_mobile_nav()"
          ></i>
      </header>
    </>
  )
}

export default Header