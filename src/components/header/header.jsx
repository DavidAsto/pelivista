import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }



  return (
    <>
    <nav className='header bg-gradient-to-r from-sky-900 to-blue-900 h-36'>
      <h1 className='text-center tracking-wider font-serif text-5xl text-slate-100 pt-5'><Link to={'/'}>Pelivista</Link></h1>


      <div className='nav flex pt-6'>
        <ul className='main-nav gap-x-16 text-white text-xl'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Series</Link></li>
          <li><Link to="#">Actores</Link></li>
          <li><Link to="$">Contacto</Link></li>
        </ul>
      </div>

      <div className='nav-mobile flex justify-end'>
          <div className={`menu gap-1 items-center ${menuOpen ? 'open' : '' }`}onClick={toggleMenu}>
            <span className='line line-1'></span>
            <span className='line line-2'></span>
            <span className='line line-3'></span>
          </div>

          <div className={`content-mobile text-white text-4xl ${menuOpen ? 'show' : ''}`}>
            <ul className='mobile-nav flex flex-col gap-y-6 '>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#">Series</Link></li>
              <li><Link to="#">Actores</Link></li>
              <li><Link to="$">Contacto</Link></li>
            </ul>
          </div>

        </div>
    </nav>

    </>
  )
}

export default Header
