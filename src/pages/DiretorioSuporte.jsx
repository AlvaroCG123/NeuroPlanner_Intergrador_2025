import React from "react";
import { Link } from "react-router-dom";

export default function DiretorioSuporte() {
  return (
    <div className="h-screen bg-[#182132] text-white font-inter flex flex-col overflow-hidden">
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

        <div className="flex justify-center items-start gap-10">
          {/* CARD 1 */}
          <div className="bg-[#3E547D] w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left">
                CENTRO DE APOIO UNIVERSITÁRIO NAS PROXIMIDADES
              </h3>
              <div className="text-center">
                <p className="text-sm text-gray-200 mb-2">
                  Ativar localização em tempo real
                </p>
                <p className="text-sm text-gray-300 mb-2">ou</p>
                <p className="text-sm text-gray-200 flex justify-center items-center gap-1">
                  Pesquisar local <img className="h-4" src="/lupa.png" alt="Search Icon" />
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#3E547D] w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left">
                CONTATOS DE TERAPEUTA
              </h3>
              <div className="text-center mt-10">
                <p className="text-sm text-gray-200 mb-2">Procurar nas proximidades</p>
                <p className="text-sm text-gray-300 mb-2">ou</p>
                <p className="text-sm text-gray-200">Procurar em seus contatos</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#3E547D] w-[300px] h-[470px] rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-2xl font-light leading-snug mb-15 mt-8 text-left">
                GRUPOS DE APOIO LOCAIS
              </h3>
              <div className="text-center mt-10">
                <p className="text-sm text-gray-200 mb-2">Analisar opções</p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#3E547D] w-[300px] h-[470px] rounded-[30px] cursor-pointer flex justify-center items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <h3 className="text-4xl font-light leading-snug">
              SERVIÇOS ESSENCIAIS
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
