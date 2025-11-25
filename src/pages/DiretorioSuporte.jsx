import React from "react";
import { Link } from "react-router-dom";

export default function DiretorioSuporte() {
  return (
    <div className="min-h-screen bg-[#182132] text-white font-inter flex flex-col">

      <header className="w-full py-6 px-8 flex items-center justify-between bg-[#182132]">
        
        <button className="block md:hidden text-white hover:opacity-80">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>

        <Link to="/dashboard" className="hidden md:flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>

        {/* Botão Voltar (Aparece em ambos) */}
        <Link
          to="/Dashboard"
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

        {/* CONTAINER DOS CARDS */}
        {/* Mobile: flex-col (um embaixo do outro) | PC: flex-row (um ao lado do outro) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 w-full">
          
          {/* CARD 1 */}
          {/* Ajustei a cor para um azul levemente mais claro (#3E4C68) para dar o contraste da foto no mobile, mas mantendo o estilo */}
          <div className="bg-[#3E4C68] md:bg-[#253658] w-full max-w-xs md:w-[300px] min-h-[250px] md:h-[470px] rounded-[35px] md:rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-xl md:text-2xl font-light leading-snug mb-4 md:mb-15 md:mt-8 text-white">
                CENTRO DE APOIO UNIVERSITÁRIO NAS PROXIMIDADES
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center text-gray-200 md:text-white">
                <p className="text-sm">Ativar localização em tempo real</p>
                <p className="text-sm">ou</p>
                <p className="text-sm flex items-center gap-2">
                  Pesquisar local 
                  {/* Lupa SVG (substituindo imagem para garantir cor correta) */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#3E4C68] md:bg-[#253658] w-full max-w-xs md:w-[300px] min-h-[250px] md:h-[470px] rounded-[35px] md:rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-xl md:text-2xl font-light leading-snug mb-4 md:mb-15 md:mt-8 text-white">
                CONTATOS DE TERAPEUTA
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center mt-4 md:mt-23 text-gray-200 md:text-white">
                <p className="text-sm">Procurar nas proximidades</p>
                <p className="text-sm">ou</p>
                <p className="text-sm">Procurar em seus contatos</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#3E4C68] md:bg-[#253658] w-full max-w-xs md:w-[300px] min-h-[250px] md:h-[470px] rounded-[35px] md:rounded-[30px] cursor-pointer flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300 px-8 py-10">
            <div>
              <h3 className="text-xl md:text-2xl font-light leading-snug mb-4 md:mb-15 md:mt-8 text-white">
                GRUPOS DE APOIO LOCAIS
              </h3>
              <div className="flex flex-col gap-2 items-center justify-center mt-4 md:mt-23 text-gray-200 md:text-white">
                <p className="text-sm">Analisar opções</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}