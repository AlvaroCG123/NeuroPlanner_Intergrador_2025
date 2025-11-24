import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="w-screen h-screen min-h-screen font-sans flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{backgroundImage: "url('/fundodesktop1.png')"}} />
      <div className="absolute inset-0 w-full h-full bg-opacity-40 z-10" />
      <div className="relative z-20 w-full h-full flex flex-col justify-between items-center">
        <Link to="/" className="mt-6 ml-6 md:mt-7 md:ml-7 text-white text-base font-medium self-start hover:underline transition">
          Voltar
        </Link>
        <div className="flex-1 flex flex-col justify-center items-center px-4">
          <div className="text-white text-4xl sm:text-5xl md:text-6xl font-light mb-2 text-center">
            Bem-vindo ao
          </div>
          <div className="text-4xl sm:text-5xl md:text-5xl font-bold app-title text-center">
            <Link to="/" className="no-underline text-white">
              <span className="text-[#30BBDE]">Neuro</span>Planner
            </Link>
          </div>
        </div>
        <div className="bottom-navigation w-full flex justify-between items-center px-6 md:px-12 py-6 sticky bottom-0 z-10">
          <div className="nav-arrow left-arrow w-12 flex justify-center text-3xl text-white">
            <Link to="/">&#10094;</Link>
          </div>

          <div className="pagination-dots flex gap-3">
            <span className="dot w-2.5 h-2.5 rounded-full bg-[#63B3ED] opacity-0" />
            <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-0" />
            <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-0" />
          </div>

          <div className="nav-arrow right-arrow w-12 flex justify-center text-3xl text-white cursor-pointer hover:text-[#30BBDE] transition">
            <Link to="/local">&#10095;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}