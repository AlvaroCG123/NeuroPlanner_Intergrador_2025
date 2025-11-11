import React from 'react';
import { Link } from 'react-router-dom';

export default function Plano() {
  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-cover bg-center" style={{backgroundImage: "url('/fundodesktop2.png')"}}>
      <header className="flex items-center px-8 py-5 mb-5">
        <div className="flex items-center logo text-white text-2xl font-bold">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-8 mr-2" />
          <Link to="/" className="no-underline text-white"><span className="text-[#30BBDE]">Neuro</span>Planner</Link>
        </div>
      </header>
      <main className="grow flex flex-col items-center justify-center px-8 text-center">
        <div className="main-content max-w-2xl w-full">
          <h1 className="title text-3xl md:text-4xl mb-2 text-white">Escolha Seu Plano</h1>
          <p className="description text-base md:text-lg text-[#CBD5E0] mb-8 font-light">
            Selecione o plano que melhor se encaixa nas suas necessidades para começar.
          </p>
          <div className="options-container flex flex-col gap-5 items-center w-full">
            <a href="#" className="option-card bg-[#2D3748] border border-[#4A5568] rounded-xl p-6 w-full max-w-lg text-left text-white transition hover:border-[#63B3ED] hover:-translate-y-1">
              <div className="card-title text-lg font-bold mb-2">Plano Básico (Gratuito)</div>
              <div className="card-description text-sm text-[#A0AEC0]">Organização de tarefas e notas essenciais. Perfeito para começar.</div>
            </a>
            <a href="#" className="option-card bg-[#2D3748] border border-[#4A5568] rounded-xl p-6 w-full max-w-lg text-left text-white transition hover:border-[#63B3ED] hover:-translate-y-1">
              <div className="card-title text-lg font-bold mb-2">Plano Premium (R$ XX/mês)</div>
              <div className="card-description text-sm text-[#A0AEC0]">Tudo do básico, mais integração de calendário, relatórios de progresso e suporte prioritário.</div>
            </a>
            <a href="#" className="option-card bg-[#2D3748] border border-[#4A5568] rounded-xl p-6 w-full max-w-lg text-left text-white transition hover:border-[#63B3ED] hover:-translate-y-1">
              <div className="card-title text-lg font-bold mb-2">Plano Institucional (Personalizado)</div>
              <div className="card-description text-sm text-[#A0AEC0]">Para escolas e faculdades: gestão de turmas, comunicação em massa e dashboards analíticos.</div>
            </a>
          </div>
        </div>
      </main>
      <footer className="bottom-navigation w-full flex justify-between items-center px-8 py-6 sticky bottom-0 z-10">
        <div className="nav-arrow left-arrow text-3xl text-white">
          {/* Link de volta para a página anterior */}
          <Link to="/local">&#10094;</Link>
        </div>
        <div className="pagination-dots flex gap-3">
          {/* Ponto 1 - Inativo */}
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          {/* Ponto 2 - Inativo */}
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          {/* Ponto 3 - Ativo */}
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#63B3ED] opacity-100" />
        </div>
        <div className="nav-arrow right-arrow text-3xl text-white">
          {/* Link para o painel principal após a conclusão do onboarding */}
          <Link to="/dashboard">&#10095;</Link>
        </div>
      </footer>
    </div>
  );
}