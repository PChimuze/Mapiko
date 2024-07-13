import React from 'react'
import { NavBar } from './navBar'

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white h-20 px-8 text-lg">
        <div  className="text-2xl font-bold border border-white p-2">Logo</div>
        <NavBar/>
      </header>
    </>
  )
}


