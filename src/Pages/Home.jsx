import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Header/>
      <main>
      Home
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

