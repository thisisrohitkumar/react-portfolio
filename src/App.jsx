import React from 'react'
import './App.css'
import './assets/styles/global/custom-scrollbar.css'
import './assets/styles/global/responsive.css'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import FixedSocialIcons from './components/fixed-social-icons/FixedSocialIcons'
import FixedEmail from './components/fixed-email/FixedEmail'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Qualifications from './components/qualifications/Qualification'

const App = () => {
  return (
    <>
      <div className="page__wrapper">
        <Header />
        <Hero />
        <FixedSocialIcons />
        <FixedEmail />
        <Qualifications />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App