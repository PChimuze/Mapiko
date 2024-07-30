import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { Outlet } from 'react-router-dom'

export const SobreNos = () => {
  return (
    <>
      <Header/>
      <main>
      <section id="sobre-nos" className="sobre-nos">
          <h2>Sobre Nós</h2>
          
          <div className="section-content">
              <h3>Quem Somos</h3>
              <p>
                  Empresa moçambicana com enfoque na área de comunicação e relações públicas e com foco no objectivo do cliente.
                  Certificamo-nos da compreensão profunda das necessidades dos nossos clientes propondo as melhores escolhas para cada projeto.
              </p>
              <p>
                  Uma empresa moçambicana formada por profissionais de comunicação social, com experiência de gestão de televisão e jornais nacionais,
                  assessoria de dirigentes de top no governo de Moçambique, gestão de marketing e de empresas.
              </p>
          </div>

          <div className="section-content">
              <h3>Visão</h3>
              <p>
                  Desenvolver um excelente canal de comunicação entre os nossos clientes e o seu público-alvo, promovendo aproximação entre ambos.
              </p>
          </div>

          <div className="section-content">
              <h3>Missão</h3>
              <p>
                  Ser referência nacional na consultoria e assessoria em comunicação e imagem, publicidade e Marketing,
                  através de serviços prestados com qualidade e excelência.
              </p>
          </div>

          <div className="section-content">
              <h3>Valores</h3>
              <ul>
                  <li>Confiança nas pessoas, nas suas habilidades;</li>
                  <li>Servir o cliente, com qualidade, eficiência, produtividade e responsabilidade;</li>
                  <li>Liberdade de expressão e comunicação e acesso privilegiado a fontes de informação.</li>
              </ul>
          </div>
      </section>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}



