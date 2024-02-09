import React from 'react'
import './header.css'


const Header = () => {

  return (
    <>
    <div className='bg-gradient-to-r from-sky-900 to-blue-900 h-36'>
      <h1 className='text-center tracking-wider font-serif text-5xl text-slate-100 pt-5'>Pelivista</h1>

      <div className='nav flex justify-around pt-6'>

        <ul className='main-nav flex gap-x-16 text-white text-xl'>
          <li><a href="">Peliculas</a></li>
          <li><a href="">Series</a></li>
          <li><a href="">Actores</a></li>
          <li><a href="">Contacto</a></li>
        </ul>

        <div className='search'>
          <input className='border border-2 border-black' type="text" />

        </div>

      </div>
    </div>

    </>
  )
}

export default Header
