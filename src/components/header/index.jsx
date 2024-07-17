import React from 'react'
import { NavBar } from './navBar'

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white h-20 px-8 text-lg shadow-lg border-b border-yellow-DEFAULT">
        <div  className="text-2xl font-bold border border-yellow-DEFAULT p-2 rounded-md">Logo</div>
        <NavBar/>
      </header>
    </>
  )
}


