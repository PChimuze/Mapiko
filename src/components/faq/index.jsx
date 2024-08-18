import React from 'react';

export const FAQ = () => {
  return (
    <main className="p-4 md:p-8 bg-gray-100">
      <section id="faq" className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">O que é a Mapiko Comunicações?</h3>
          <p className="text-gray-700">
            A Mapiko Comunicações é uma empresa moçambicana especializada em comunicação e relações públicas, com foco em atender às necessidades de seus clientes. Oferecemos serviços em assessoria de imprensa, gerenciamento de crises, e produção de materiais gráficos e audiovisuais.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Qual é a missão da empresa?</h3>
          <p className="text-gray-700">
            Nossa missão é ser referência nacional na consultoria e assessoria em comunicação e imagem, publicidade e marketing, através de serviços prestados com qualidade e excelência.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Quais são os valores da Mapiko Comunicações?</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Confiança nas pessoas, nas suas habilidades;</li>
            <li>Servir o cliente com qualidade, eficiência, produtividade e responsabilidade;</li>
            <li>Liberdade de expressão e comunicação e acesso privilegiado a fontes de informação.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Quais são as áreas de atuação da empresa?</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Assessoria de Imprensa e Relações Públicas</li>
            <li>Gestão de Crise de Imagem</li>
            <li>Criação e Organização de Eventos Corporativos</li>
            <li>Concepção e Produção de Matérias Gráficos</li>
            <li>Anúncios de imprensa</li>
            <li>Brochuras/revistas</li>
            <li>Suplementos informativos</li>
            <li>Spot/Vídeos institucionais</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Quais são os fatores diferenciadores da Mapiko Comunicações?</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Cobertura de Media</h4>
            <p className="text-gray-700">
              A Mapiko Comunicações assegura a cobertura noticiosa dos eventos dos seus clientes pela mídia relevante do país. Temos contatos privilegiados nos principais meios de comunicação nacionais e nas empresas jornalísticas estrangeiras com representação em Moçambique. Nossa equipe possui habilidades de gestão e jornalismo, com vasta experiência em imprensa escrita, digital e televisão. A rede de contatos, o conhecimento dos jornalistas e das dinâmicas de produção noticiosa são ativos diferenciadores na gestão de crises.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Relações Públicas</h4>
            <p className="text-gray-700">
              Temos vasta experiência no planejamento, relacionamento, organização de eventos, opinião pública, comportamento do consumidor, relações governamentais e gestão de crises. Nossa equipe é composta por jornalistas reconhecidos na sociedade, o que assegura a influência dos nossos clientes nas questões de seu interesse.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Como posso entrar em contato com a Mapiko Comunicações?</h3>
          <p className="text-gray-700">
            Você pode entrar em contato conosco pelo seguinte endereço:
            <br />
            Avenida Patrice Lumumba, n° 1566
            <br />
            Cidade de Maputo
          </p>
        </div>
      </section>
    </main>
  );
};
