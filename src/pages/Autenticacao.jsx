import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Autenticacao() {
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [requested, setRequested] = useState(false);
  const navigate = useNavigate();

  // Formata o CNPJ para exibição e limita a 14 dígitos
  const formatCnpj = (value) => {
    const digits = (value || '').replace(/\D/g, '').slice(0, 14);
    // Formatação simples: 00.000.000/0000-00
    let formatted = digits;
    if (digits.length > 12) {
      formatted = digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else if (digits.length > 8) {
      formatted = digits.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/, '$1.$2.$3/$4');
    } else if (digits.length > 5) {
      formatted = digits.replace(/(\d{2})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (digits.length > 2) {
      formatted = digits.replace(/(\d{2})(\d{1,3})/, '$1.$2');
    }
    return formatted;
  };

  const handleCnpjChange = (e) => {
    setCnpj(formatCnpj(e.target.value));
  };

  const handleRequest = () => {
    // Não validar no cliente: apenas salvar e redirecionar para o dashboard da instituição
    const digits = cnpj.replace(/\D/g, '');
    localStorage.setItem('institution', JSON.stringify({ cnpj: digits, email: (email || '').trim().toLowerCase() }));
    setRequested(true);
    // navegar para a página do código para o usuário copiar/ver antes de ir ao dashboard
    navigate('/codigo');
  };

  return (
    <>
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{backgroundImage: "url('/fundodesktop2.png')"}}>
      
      <header className="flex items-center px-6 md:px-12 py-6">
        <div className="flex items-center logo text-white text-2xl font-bold">
          {/* Corrigindo o caminho da logo */}
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
          <Link to="/" className="no-underline text-white">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </Link>
        </div>
      </header>

      {/* Conteúdo Central */}
      <div className="flex-1 flex flex-col items-center justify-center w-full p-6 md:max-w-2xl mx-auto">
        
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl md:text-4xl text-center font-light text-white/90">
            Autenticação da Instituição de Ensino
          </h1>
        </div>

        <div className="w-full md:px-8 gap-4">
          {/* Campo CNPJ */}
          <div className="relative mb-8">
            <input
              value={cnpj}
              onChange={handleCnpjChange}
              className="w-full bg-transparent text-white border text-2xl rounded-2xl py-6.5 outline-none border-[#30BBDE] transition-colors text-center"
              type="text"
              placeholder="00.000.000/0000-00"
            />
            <label className="absolute -top-3.5 right-8 px-2 bg-[#081524] md:text-xl text-[#30BBDE] font-light tracking-wide">
              insira o CNPJ (máx. 14 dígitos)
            </label>
          </div>

          {/* Campo E-mail */}
          <div className="relative mb-8">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white border text-2xl rounded-2xl py-6.5 outline-none border-[#30BBDE] transition-colors text-center"
              type="email"
              placeholder="instituicao@exemplo.edu.br"
            />
            <label className="absolute -top-3.5 right-8 px-2 bg-[#081524] md:text-xl text-[#30BBDE] font-light tracking-wide">
              insira o E-mail institucional (obrigatório)
            </label>
          </div>

          

          <div className='px-30'>
            <button
              onClick={handleRequest}
              disabled={requested}
              className={`block w-full py-3 rounded-full text-2xl border transition-all duration-300 font-medium tracking-wide
                ${requested ? 'bg-gray-600 text-gray-400 border-gray-500 cursor-not-allowed' : 'bg-transparent text-[#30BBDE] border-[#30BBDE] shadow-[0_0_15px_rgba(48,187,222,0.15)] hover:shadow-[0_0_20px_rgba(48,187,222,0.3)] hover:bg-[#30BBDE]/5'}`}
            >
              {requested ? 'Processando...' : 'Concluir'}
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
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#30BBDE] opacity-100" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
        </div>

        <div className="nav-arrow right-arrow w-12 flex justify-center text-3xl text-white">
          <button
            onClick={handleRequest}
            disabled={!cnpj.trim() || !email.trim() || requested}
            className={`bg-transparent border-none p-0 cursor-pointer transition duration-300 focus:outline-none ${
              (!cnpj.trim() || !email.trim() || requested) ? 'text-gray-500 opacity-50 cursor-not-allowed' : 'text-white hover:text-[#30BBDE]'
            }`}
          >
            &#10095;
          </button>
        </div>
      </footer>
    </div>

    
    </>
  );
}