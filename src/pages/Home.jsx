import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A202C] text-white font-sans">
      <header className="w-full flex items-center px-6 md:px-12 py-6">
        <Link to="/" className="flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>
      </header>

      <main className="grow flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-12 gap-12">
        <div className="max-w-full lg:max-w-[700px] text-center lg:text-left mb-12 order-2 lg:order-1">
          <div classNameName="ml-0 lg:ml-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-5 font-semibold leading-tight">
              Planeje sua rotina de estudos com <br />
              <span className="text-[#30BBDE]">Neuro</span>Planner
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed text-[#dee5ec] mb-10 font-light max-w-2xl mx-auto lg:mx-0">
              Uma plataforma dedicada a transformar a jornada acadêmica de 
              estudantes neurodivergentes que embarcam em programas de 
              intercâmbio ou viagens de longa duração. Sabemos que estudar 
              em um novo ambiente, com diferentes culturas e rotinas, já é um 
              desafio. Some-se a isso os aspectos únicos da neurodiversidade 
              e a necessidade de suporte personalizado se torna ainda mais evidente.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <Link 
                to="/login" 
                className="inline-block px-7 py-3.75 rounded-lg text-white no-underline font-semibold text-base bg-[#202D40] border-2 border-[#202D40] transition-all duration-300 ease-in-out hover:bg-[#26354b] hover:-translate-y-0.5"
              >
                Entrar
              </Link>
              
              <span className="text-white text-lg mx-1.5 font-light">ou</span>
              
              <Link 
                to="/signup" 
                className="inline-block px-7 py-3.75 rounded-lg bg-[#30BBDE] text-[#1A202C] no-underline font-semibold text-base border-none transition-all duration-300 ease-in-out hover:bg-[#25a1c0] hover:-translate-y-0.5"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[700px] flex justify-center lg:justify-end shrink-0 order-1 lg:order-2">
          <img
            src="/sobrenos.png"
            alt="Ilustração NeuroPlanner"
            className="mb-8 lg:mb-20 w-full max-w-sm sm:max-w-md lg:max-w-[600px] h-auto object-contain"
          />
        </div>
      </main>

      <footer className="mt-auto p-8 text-center" />
    </div>
  );
}