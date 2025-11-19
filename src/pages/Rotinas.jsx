import React from 'react';
import { Link } from 'react-router-dom';

export default function Rotinas() {
  const buttonStyle =
    'p-6 lg:p-8 bg-[#374D77] rounded-xl lg:rounded-2xl border-none transition-colors  hover:bg-[#253450] text-white text-lg lg:text-[30px] font-normal cursor-pointe text-center  ';

  return (
    <div className="min-h-screen bg-[#182132] text-white font-[Inter] px-4 lg:px-0">
      <header className="pt-5 flex justify-between items-center px-4 lg:px-8 py-4">
        <Link to="/dashboard" className="flex items-center text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-8 lg:w-12 mr-2" />
          <h1 className="text-xl lg:text-3xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>
        <div className="button">
          <button>
            <Link to="/dashboard" className="text-white text-base lg:text-2xl no-underline">
              Voltar
            </Link>
          </button>
        </div>
      </header>

      <main className="flex justify-center items-center flex-col mt-50 lg:mt-36 px-4">
        <div className="text-center">
          <p className="text-2xl lg:text-6xl font-normal">CRIADOR DE ROTINA</p>
        </div>
        <div className="mt-8 lg:mt-16 flex flex-col gap-4 lg:gap-8 w-full max-w-xl">
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