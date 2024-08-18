import React from 'react';

export const SobreNos = () => {
  return (
    <>
      <main className="p-4 md:p-8 bg-gray-100 ">
        <section id="about" className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">Sobre Nós</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Quem Somos</h3>
            <p className="text-gray-700 mb-4">
              Empresa moçambicana com enfoque na área de comunicação e relações públicas e com foco no objectivo do cliente.
              Certificamo-nos da compreensão profunda das necessidades dos nossos clientes propondo as melhores escolhas para cada projeto.
            </p>
            <p className="text-gray-700">
              Uma empresa moçambicana formada por profissionais de comunicação social, com experiência de gestão de televisão e jornais nacionais,
              assessoria de dirigentes de top no governo de Moçambique, gestão de marketing e de empresas.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Visão</h3>
            <p className="text-gray-700">
              Desenvolver um excelente canal de comunicação entre os nossos clientes e o seu público-alvo, promovendo aproximação entre ambos.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Missão</h3>
            <p className="text-gray-700">
              Ser referência nacional na consultoria e assessoria em comunicação e imagem, publicidade e Marketing,
              através de serviços prestados com qualidade e excelência.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Valores</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Confiança nas pessoas, nas suas habilidades;</li>
              <li>Servir o cliente, com qualidade, eficiência, produtividade e responsabilidade;</li>
              <li>Liberdade de expressão e comunicação e acesso privilegiado a fontes de informação.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
