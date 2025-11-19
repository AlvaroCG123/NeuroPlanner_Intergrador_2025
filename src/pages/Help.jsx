import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Help() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const savedOption = localStorage.getItem('selectedHelpOption');
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  const options = [
    { 
      id: 'supportedExchange', 
      title: 'Intercâmbio Apoiado', 
      description: 'Para quem está em uma instituição de ensino (escola, faculdade) no exterior e busca organizar seus estudos'
    },
    { 
      id: 'soloAdventure', 
      title: 'Aventura Solo', 
      description: 'Para quem viaja de forma independente e quer manter o foco nos estudos por conta própria.'
    },
    { 
      id: 'localRoutine', 
      title: 'Rotina Local', 
      description: 'Para quem busca organizar a vida acadêmica e se concentrar melhor no dia a dia, sem estar em viagem.'
    },
  ];

  const handleSelectOption = (id) => {
    setSelectedOption(id);
    // Salva imediatamente para garantir que a opção persista no F5
    localStorage.setItem('selectedHelpOption', id);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate('/formulario');
    } else {
      console.log('Por favor, selecione uma opção antes de continuar.');
    }
  };

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
      <main className="grow flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <div className="main-content max-w-2xl w-full">
          <h1 className="title text-3xl sm:text-4xl mb-2 text-white">
            Como podemos ajudar você?
          </h1>
          <p className="description text-sm md:text-lg text-[#CBD5E0] mb-8 font-light">
            Selecione a opção que é mais relevante para você. 
            <span className="highlight-text text-[#63B3ED] font-semibold">
              (você pode mudar isso em qualquer momento nas configurações)
            </span>
          </p>
          <div className="options-container flex flex-col gap-5 items-center w-full">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`
                  bg-[#2D3748] rounded-xl p-4 sm:p-6 w-full max-w-lg text-left text-white cursor-pointer 
                  transition duration-200 border-2 select-none
                  ${selectedOption === option.id 
                    ? 'border-[#30BBDE] scale-[1.01] shadow-lg shadow-[#30BBDE]/30' 
                    : 'border-[#4A5568] hover:border-[#63B3ED] hover:-translate-y-0.5'
                  }
                `}
              >
                <div className="card-title text-base sm:text-lg font-bold mb-1">{option.title}</div>
                <div className="card-description text-xs sm:text-sm text-[#A0AEC0]">{option.description}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
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
            onClick={handleNext}
            disabled={!selectedOption}
            className={`bg-transparent border-none p-0 cursor-pointer transition duration-300 focus:outline-none 
              ${selectedOption ? 'text-white hover:text-[#30BBDE]' : 'text-gray-500 opacity-50 cursor-not-allowed'}
            `}
          >
            &#10095;
          </button>
        </div>
      </footer>
    </div>
  );
}