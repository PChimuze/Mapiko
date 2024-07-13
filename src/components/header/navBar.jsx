import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const activeStyles = "text-red-500";
  const inactiveStyles = "text-white";


  return (
    <>
    <nav className='space-x-4'>
        <NavLink to ={'/'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Home</NavLink>

        <NavLink to ={'/portifolio'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Portifolio</NavLink>

        <NavLink to ={'/servicos'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Servicos</NavLink>

        <NavLink to ={'/contactos'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Contactos</NavLink>

        <NavLink to ={'/sobre-nos'} className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Sobre</NavLink>
    </nav>
    </>
  )
}

