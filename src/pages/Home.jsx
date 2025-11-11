import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A202C] text-white font-sans">
      {/* Header - PADRONIZADO */}
      <header className="w-full flex items-center px-6 md:px-20 py-6">
              <Link to="/" className="flex items-center no-underline text-white">
                <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3" />
                <h1 className="text-2xl md:text-4xl font-bold">
                  <span className="text-[#30BBDE]">Neuro</span>Planner
                </h1>
              </Link>
            </header>

      {/* Main Content */}
      <main className="grow flex items-center justify-around px-50 gap-12 flex-wrap">
        {/* Left Content */}
        <div className="max-w-[750px] text-left mb-12">
          <div className="ml-4">
            <h1 className="text-6xl mb-5 font-semibold">
              Planeje sua rotina de estudos com <br />
              <span className="text-[#30BBDE]">Neuro</span>Planner
            </h1>
            
            <p className="text-base leading-relaxed text-[#dee5ec] mb-10 font-light">
              Uma plataforma dedicada a transformar a jornada acadêmica de 
              estudantes neurodivergentes que embarcam em programas de 
              intercâmbio ou viagens de longa duração. Sabemos que estudar 
              em um novo ambiente, com diferentes culturas e rotinas, já é um 
              desafio. Some-se a isso os aspectos únicos da neurodiversidade 
              e a necessidade de suporte personalizado se torna ainda mais evidente.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-5">
              <Link 
                to="/login" 
                className="inline-block px-7 py-3.75 rounded-lg text-white no-underline font-semibold text-base bg-[#202D40] border-2 border-[#202D40] transition-all duration-300 ease-in-out hover:bg-[#26354b] hover:-translate-y-0.5"
              >
                Entrar
              </Link>
              
              <span className="text-white text-lg mx-2.5 font-light">ou</span>
              
              <Link 
                to="/signup" 
                className="inline-block px-7 py-3.75 rounded-lg bg-[#30BBDE] text-[#1A202C] no-underline font-semibold text-base border-none transition-all duration-300 ease-in-out hover:bg-[#25a1c0] hover:-translate-y-0.5"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:max-w-[700px] flex justify-center md:justify-end shrink-0">
          <img
            src="/sobrenos.png"
            alt="Ilustração NeuroPlanner"
            className="mb-20 w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-8 text-center" />
    </div>
  );
}