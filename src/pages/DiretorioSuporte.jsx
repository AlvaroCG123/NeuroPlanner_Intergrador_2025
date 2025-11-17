import React from "react";
import { Link } from "react-router-dom";

export default function DiretorioSuporte() {
  return (
    <div className="min-h-screen bg-[#182132] text-white font-inter flex flex-col">
      {/* HEADER */}
      <header className="w-full py-6 px-8 flex items-center justify-between bg-[#182132]">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>

        {/* Voltar */}
        <Link
          to="/Dashboard"
          className="text-2xl font-semibold hover:opacity-80 transition"
        >
          Voltar
        </Link>
      </header>

      {/* MAIN */}
      <main className="flex flex-col items-center justify-center flex-1 px-8 mb-15">
        <h2 className="text-5xl font-extrabold text-center mb-10">
          DIRETÓRIO DE SUPORTE
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 w-full">
          {/* CARD 1 */}
          <div className="bg-[#253658] w-full max-w-xs md:w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10 mb-6 md:mb-0">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left text-white">
                CENTRO DE APOIO UNIVERSITÁRIO NAS PROXIMIDADES
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm text-white">Ativar localização em tempo real</p>
                <p className="text-sm text-white">ou</p>
                <p className="text-sm text-white flex items-center gap-1">Pesquisar local <img className="h-4" src="/lupa.png" alt="Search Icon" /></p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#253658] w-full max-w-xs md:w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10 mb-6 md:mb-0">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left text-white">
                CONTATOS DE TERAPEUTA
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center mt-23">
                <p className="text-sm text-white">Procurar nas proximidades</p>
                <p className="text-sm text-white">ou</p>
                <p className="text-sm text-white">Procurar em seus contatos</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#253658] w-full max-w-xs md:w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10 mb-6 md:mb-0">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left text-white">
                GRUPOS DE APOIO LOCAIS
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center mt-23">
                <p className="text-sm text-white">Analisar opções</p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#253658] w-full max-w-xs md:w-[300px] h-[470px] rounded-[30px] cursor-pointer flex justify-center items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug text-white">
              POST-ITS VIRTUAIS <br /> ♡
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
