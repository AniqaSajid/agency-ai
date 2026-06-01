import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorOrb from './components/CursorOrb'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white min-h-screen">
        <CursorOrb />
        <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
        <Hero />
        <Brands />
        <Services />
        <Work />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
