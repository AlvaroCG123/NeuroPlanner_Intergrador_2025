import React from 'react';
import { Link } from 'react-router-dom';

export default function Formulario() {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/fundodesktop2.png')" }}>
      <header className="flex items-center px-6 md:px-12 py-6">
        <div className="flex items-center logo text-white text-2xl font-bold">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
          <Link to="/" className="no-underline text-white">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </Link>
        </div>
      </header>
      <main className="grow flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <div className="main-content max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-white leading-snug font-light">
            Para um plano de estudos eficiente,
            <span className='text-[#30BBDE] font-bold'> responda as questões: </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#CBD5E0] mb-8 font-light">
            Isso levará apenas 1 minuto.
          </p>
          <div className="options-container flex flex-col gap-5 items-center w-full">

            <div className="options-container flex flex-col gap-5 items-center w-full">
            <Link
              to="/Formulario1"
              className="cursor-pointer text-xl sm:text-2xl bg-transparent hover:bg-[#30BBDE] text-[#30BBDE] font-bold hover:text-white py-3 px-8 sm:px-12 border-2 border-[#30BBDE] hover:border-transparent rounded-full transition duration-300 ease-in-out"
            >
              Começar
            </Link>
          </div>
          </div>
        </div>
      </main>
      <footer className="bottom-navigation w-full flex justify-between items-center px-6 md:px-12 py-6 sticky bottom-0 z-10">
        <div className="nav-arrow left-arrow text-3xl text-white">
          <Link to="/local">&#10094;</Link>
        </div>
        <div className="pagination-dots flex gap-3">
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#30BBDE] opacity-100" />
        </div>
        <div className="nav-arrow right-arrow text-3xl text-white opacity-0">
        </div>
      </footer>
    </div>
  );
}