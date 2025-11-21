import React from 'react';
import { Link } from 'react-router-dom';

export default function Codigo() {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{backgroundImage: "url('/fundodesktop2.png')"}}>
      
      <header className="flex items-center px-6 md:px-12 py-6">
        <div className="flex items-center logo text-white text-2xl font-bold">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
          <Link to="/" className="no-underline text-white">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <section className="w-full max-w-4xl text-center text-white">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Código de Vinculação
          </h1>
          
          {/* Descrição */}
          <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Compartilhe <span className="text-[#30BBDE]">este código</span> com seus intercambistas para que eles se vinculem com a Instituição.
          </p>
          
          {/* Código em Destaque - Agora em formato circular */}
          <div className="mb-12 flex justify-center">
            <div className="flex items-center justify-center w-64 h-64 border-2 border-[#30BBDE] rounded-full backdrop-blur-sm shadow-2xl">
              <span className="text-3xl md:text-4xl font-mono font-bold text-[#30BBDE] tracking-wider text-center">
                #NEURO46B
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full flex justify-between items-center px-6 md:px-12 py-6">
        <div className="nav-arrow left-arrow w-12 flex justify-center text-3xl text-white">
          <Link to="/autenticacao">&#10094;</Link>
        </div>

        <div className="pagination-dots flex gap-3">
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#30BBDE] opacity-100" />
        </div>

        <div className="nav-arrow right-arrow w-12 flex justify-center text-3xl text-white opacity-50 cursor-not-allowed">
          <span>&#10095;</span>
        </div>
      </footer>
    </div>
  );
}