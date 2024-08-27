import React from 'react'
import { ContactCard } from './contactCard'
import { ContactForm } from './contactForm'

export const  Contactos = () => {
  return (
    <div id="contact">
      <h1 className="text-center text-2xl font-semibold m-8 mb-2">Contactos</h1>
      <ContactCard/>
      <ContactForm/>
    </div>
  )
}
