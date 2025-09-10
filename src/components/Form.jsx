import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000] px-4 py-10 font-inter">
      <div className="w-full max-w-xl form-gradient bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
        
        <p className="text-sm mb-2">
          1. Vous serez rappelé par Xavier ou Jérémy pour prendre rendez-vous et évaluer le potentiel de votre projet podcast
        </p>
        <p className="text-sm mb-6">
          2. On vous propose un plan de lancement personnalisé et une offre d'accompagnement en moins de 72h.
        </p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Indiquez votre prénom"
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Indiquez votre email"
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Le numéro pour vous rappeler"
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Sujet, format, objectifs, ..."
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Réserver un appel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
