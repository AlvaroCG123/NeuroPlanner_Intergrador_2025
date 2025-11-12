import React from 'react';
import { Link } from 'react-router-dom';

export default function Rotinas() {

  const buttonStyle =
    'p-8 bg-[#374D77] rounded-2xl border-none transition-colors duration-300 hover:bg-[#253450] text-white text-[30px] font-normal cursor-pointer';

  return (
    <div className="min-h-screen bg-[#182132] text-white font-[Inter] antialiased">
      <header className="pt-5 flex justify-between items-center px-8 py-4">
        <Link to="/dashboard" className="flex items-center no-underline text-white">
                  <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3" />
                  <h1 className="text-2xl md:text-3xl font-bold">
                    <span className="text-[#30BBDE]">Neuro</span>Planner
                  </h1>
                </Link>
        <div className="button">
          <button className="bg-transparent border-none">
            <Link to="/dashboard" className="text-white text-2xl no-underline">
              Voltar
            </Link>
          </button>
        </div>
      </header>

      <main className="flex justify-center items-center flex-col mt-36">
        <div>
          <p className="text-6xl font-normal">CRIADOR DE ROTINA</p>
        </div>
        <div className="mt-16 flex flex-col space-y-8">
          <button className={buttonStyle}>
            <p>CRIAR NOVA ROTINA</p>
          </button>

          <button className={buttonStyle}>
            <p>EDITAR ROTINA EXISTENTE</p>
          </button>

          <button className={buttonStyle}>
            <p>ROTINA SUGERIDA</p>
          </button>
        </div>
      </main>
    </div>
  );
};