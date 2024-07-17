import React from 'react'
import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer'

export const Servicos = () => {
  return (
    <>
      <Header/>
      <main>
      Servicos
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

