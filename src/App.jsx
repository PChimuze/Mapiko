
import './App.css'
import { AreasDeAtuacao } from './components/areasDeAtuacao'
import { Contactos } from './components/contactos'
import { FatoresDiferenciadores } from './components/diferencias'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'

import { NavBar } from './components/header'
import { Home } from './components/Home/Home'
import { SobreNos } from './components/sobre-nos/Sobre-nos'


function App() {

  return (
    <>
     <NavBar/>
     <Home/>
     <SobreNos/>
     <AreasDeAtuacao/>
     <FatoresDiferenciadores/>
     <FAQ/>
     <Contactos/>
     <Footer/>
    </>
  )

  
}

export default App
