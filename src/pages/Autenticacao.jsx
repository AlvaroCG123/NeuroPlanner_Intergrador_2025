import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Autenticacao() {
  const [code, setCode] = useState('');
  const [requested, setRequested] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleRequest = () => {
    if (!code.trim()) return;
    setRequested(true);
    // show animated confirmation first, then navigate
    setShowConfirmation(true);
    setTimeout(() => {
      // after animation, go to dashboard
      navigate('/dashboard');
    }, 2000);
  };

  // SVG Icons para as setas de navegação
  const ChevronLeft = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  const ChevronRight = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  return (
    <>
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{backgroundImage: "url('/fundodesktop2.png')"}}>
      
      <header className="flex items-center px-6 md:px-12 py-6">
              <div className="flex items-center logo text-white text-2xl font-bold">
                <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
                <Link to="/" className="no-underline text-white">
                  <span className="text-[#30BBDE]">Neuro</span>Planner
                </Link>
              </div>
            </header>
      {/* Conteúdo Central */}
      <div className="flex-1 flex flex-col items-center justify-center w-full md:max-w-2xl mx-auto">
        
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl md:text-4xl text-center font-light text-white/90">
            Autenticação da Instituição de Ensino
          </h1>
        </div>

        <div className="w-full md:px-8 gap-4">
          <div>
          {/* Input com Label na Borda */}
          <div className="relative mb-8">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-transparent text-white border border-white rounded-2xl  py-6.5 outline-none focus:border-[#30BBDE] transition-colors text-center"
              type="text"
            />
            {/* Label posicionado na borda superior direita */}
            <label className="absolute -top-2.5 right-8 px-2 bg-[#081524] md:text-xl text-[#30BBDE] font-light tracking-wide">
              insira o CNPJ (obrigatório)
            </label>
            </div>


            <div>
            {/* Input com Label na Borda */}
            <div className="relative mb-8">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-transparent text-white border border-white rounded-2xl  py-6.5 outline-none focus:border-[#30BBDE] transition-colors text-center"
              type="text"/>
              {/* Label posicionado na borda superior direita */}
            <label className="absolute -top-2.5 right-8 px-2 bg-[#081524] md:text-xl text-[#30BBDE] font-light tracking-wide">
              insira o E-mail intitucional (obrigatório)
            </label>
            </div>
            </div>
          </div>

        <div className='px-30'>
          <button
            onClick={handleRequest}
            className={`block w-full py-3 rounded-full bg-transparent text-2xl text-[#30BBDE] border border-[#30BBDE] 
            shadow-[0_0_15px_rgba(48,187,222,0.15)] hover:shadow-[0_0_20px_rgba(48,187,222,0.3)] 
            hover:bg-[#30BBDE]/5 transition-all duration-300 font-medium tracking-wide`}
          >
            Concluir
          </button>
          </div>
        </div>
      </div>

      {/* Footer navigation (standardized) */}
      <footer className="bottom-navigation w-full flex justify-between items-center px-6 md:px-12 py-6 sticky bottom-0 z-10">
        <div className="nav-arrow left-arrow w-12 flex justify-center text-3xl text-white">
          <Link to="/local">&#10094;</Link>
        </div>

        <div className="pagination-dots flex gap-3">
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#30BBDE] opacity- " />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
        </div>

        <div className="nav-arrow right-arrow w-12 flex justify-center text-3xl text-white">
          <button
            onClick={handleRequest}
            disabled={!code.trim() || requested}
            className={`bg-transparent border-none p-0 cursor-pointer transition duration-300 focus:outline-none ${(!code.trim() || requested) ? 'text-gray-500 opacity-50 cursor-not-allowed' : 'text-white hover:text-[#30BBDE]'}`}
          >
            &#10095;
          </button>
        </div>
      </footer>
    </div>
    {showConfirmation && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <style>{`
          @keyframes circle-draw { from { stroke-dashoffset: 440; } to { stroke-dashoffset: 0; } }
          @keyframes check-draw { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
          @keyframes pop-in { from { transform: scale(0.85); opacity: 0 } to { transform: scale(1); opacity: 1 }
          }
        `}</style>

        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-transparent flex flex-col items-center justify-center gap-6 px-6">
            <h2 className="text-xl md:text-2xl text-white font-semibold mb-2">Solicitação Enviada</h2>
            <p className="text-sm text-[#9AA6B2] text-center">Aguarde até que a solicitação seja avaliada e aceite pelo estudante.</p>

            <div className="mt-6">
              <svg width="140" height="140" viewBox="0 0 120 120" className="mx-auto">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#2b5a6f" strokeWidth="6" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#30BBDE" strokeWidth="4" strokeLinecap="round"
                  strokeDasharray="440" strokeDashoffset="440" style={{animation: 'circle-draw 0.9s ease forwards'}} />
                <path d="M40 62 L55 76 L80 46" fill="none" stroke="#30BBDE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="60" strokeDashoffset="60" style={{animation: 'check-draw 0.5s ease 0.9s forwards'}} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}