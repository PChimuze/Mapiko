import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white py-8 px-4 md:px-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Contato</h2>
          <p className="text-gray-light mb-2">Avenida Patrice Lumumba, n° 1566</p>
          <p className="text-gray-light mb-2">Cidade de Maputo</p>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm mb-2">Desenvolvido por Mapiko Comunicações</p>
          <p className="text-sm mb-4">Todos os direitos reservados</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-yellow-DEFAULT text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-yellow-DEFAULT text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-yellow-DEFAULT text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}