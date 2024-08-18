import React from 'react';

export const AreasDeAtuacao = () => {
  return (
    <section id="areas" className="py-10  px-4 bg-gray-100 ">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Áreas de Atuação</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
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
    </section>
  );
};
