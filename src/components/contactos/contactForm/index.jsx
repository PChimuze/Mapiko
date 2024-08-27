import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    message: '',
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormVisible(false); 
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto p-6 bg-white rounded-full  mb-16">
      {!isFormVisible ? (
        <button
          onClick={() => setFormVisible(true)}
          className="w-full text-white hover:bg-blue-950 bg-blue-500  shadow-lg p-4 rounded-full   font-semibold transition duration-300"
        >
          Entrar em contato
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">Nome</label>
              <input
                type="text"
                name="name"
                placeholder='Digite seu nome'
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">Apelido</label>
              <input
                type="text"
                name="nickname"
                placeholder='Digite seu apelido'
                value={formData.nickname}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Mensagem</label>
            <textarea
              name="message"
              placeholder='Escreva aqui a sua mensagem'
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 font-semibold transition duration-300"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};
