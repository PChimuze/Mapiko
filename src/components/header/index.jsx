import React from 'react'
import { NavBar } from './navBar'

export const Header = () => {
  
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white h-20 px-8 text-lg shadow-lg border-b border-yellow-DEFAULT">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.jpeg" 
            alt="Logo" 
            className="h-16 w-auto border border-yellow-DEFAULT rounded-md"
          />
        </div>
        <NavBar />
      </header>
    </>
  );
}


