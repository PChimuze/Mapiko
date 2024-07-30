import React from 'react'
import { NavBar } from './navBar'
import { Link } from 'react-router-dom';

export const Header = () => {
  
  return (
    <>
      <header className="flex items-center justify-between bg-amareloPrimaria text-white h-16 px-8 text-lg shadow-lg ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={"/"}>
          <img 
            src="/logo.jpeg" 
            alt="Logo" 
            className="h-12 w-auto border border-yellow-DEFAULT rounded-md"
            />
            </Link>
        </div>
        <NavBar />
      </header>
    </>
  );
}


