import React from 'react'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Outlet } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <>
      <Header/>
      <main>
      404
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}


