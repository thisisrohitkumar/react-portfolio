import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav>
          <ul>
            <li>
              <a href="#about"><span>01. </span>About</a>
            </li>
            <li>
              <a href="#qualification"><span>02. </span>Qualification</a>
            </li>
            <li>
              <a href="#experience"><span>03. </span>Experience</a>
            </li>
            <li>
              <a href="#project"><span>04. </span>Project</a>
            </li>
            <li>
              <a href="#skills"><span>05. </span>Skills</a>
            </li>
            <li>
              <a href="#contact"><span>06. </span>Contact</a>
            </li>
            <li>
              <a href="assets/pdfs/Rohit_Kumar_Resume.pdf" target="_blank"
                ><button title="View Resume">Resume</button></a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar