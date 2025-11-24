import React from "react";
import { Link } from "react-router-dom";

export default function DiretorioSuporteResponsavel() {
  return (
    <div className="min-h-screen bg-[#182132] text-white font-inter flex flex-col">
      {/* HEADER */}
      <header className="w-full py-6 px-8 flex items-center justify-between bg-[#182132]">
        <Link to="/dashboard-responsavel" className="hidden md:flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>

        <Link
          to="/dashboard-responsavel"
          className="text-xl md:text-2xl font-semibold hover:opacity-80 transition text-white no-underline"
        >
          Voltar
        </Link>
      </header>

      {/* MAIN */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 md:px-8 mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 mt-2 md:mt-0">
          DIRETÓRIO DE SUPORTE
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 w-full">
          <div className="bg-[#3E4C68] md:bg-[#253658] w-full max-w-xs md:w-[300px] min-h-[250px] md:h-[470px] rounded-[35px] md:rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl md:text-2xl font-light leading-snug mb-6 text-white text-center">
                POST-ITS VIRTUAIS
              </h3>
              <div className="text-white text-3xl">♡</div>
            </div>
          </div>

          <div className="bg-[#3E4C68] md:bg-[#253658] w-full max-w-xs md:w-[300px] min-h-[250px] md:h-[470px] rounded-[35px] md:rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl md:text-2xl font-light leading-snug mb-6 text-white text-center">
                INDICAÇÃO DE MÉDICOS E TERAPEUTAS
              </h3>
              <div className="text-sm text-white/80">+ Adicionar</div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
