import React from 'react';
import { Link } from 'react-router-dom';

export default function Formulario() {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/fundodesktop2.png')" }}>
      <header className="flex items-center px-8 py-5 mb-5">
        <div className="flex items-center logo text-white text-2xl font-bold">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-8 mr-2" />
          <Link to="/" className="no-underline text-white"><span className="text-[#30BBDE]">Neuro</span>Planner</Link>
        </div>
      </header>
      <main className="grow flex flex-col items-center justify-center px-8 text-center">
        <div className="main-content max-w-3xl w-full">
          <h1 className="text-5xl mb-2 text-white leading-15 font-light">Para um plano de estudos eficiente,<span className='text-[#30BBDE] font-bold'> responda as questões: </span></h1>
          <p className="text-2xl text-[#CBD5E0] mb-8 font-light">
            Isso levará apenas 1 minuto.
          </p>
          <div className="options-container flex flex-col gap-5 items-center w-full">
            <button class="cursor-pointer text-2xl bg-transparent hover:bg-[#30BBDE] text-[#30BBDE] font-bold hover:text-white py-3 px-15 border border-[#30BBDE] hover:border-transparent rounded-3xl
          ">
              Começar
            </button>
          </div>
        </div>
      </main>
      <footer className="bottom-navigation w-full flex justify-between items-center px-8 py-6 sticky bottom-0 z-10">
        <div className="nav-arrow left-arrow text-3xl text-white">
          <Link to="/local">&#10094;</Link>
        </div>
        <div className="pagination-dots flex gap-3">
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#63B3ED] opacity-100" />
        </div>
        <div className="nav-arrow right-arrow text-3xl text-white opacity-0">
        </div>
      </footer>
    </div>
  );
}