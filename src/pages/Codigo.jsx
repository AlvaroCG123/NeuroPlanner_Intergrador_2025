import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Codigo() {
  const navigate = useNavigate();

  let code = null;
  try {
    const rawUser = localStorage.getItem('user');
    if (rawUser) {
      const u = JSON.parse(rawUser);
      code = u.code || u.codigo || u.vinculo || u.bindingCode || u.codigoVinculacao || null;
    }
    if (!code) {
      const rawInst = localStorage.getItem('institution');
      if (rawInst) {
        const inst = JSON.parse(rawInst);
        code = inst.code || inst.codigo || inst.cnpj || null;
      }
    }
  } catch (e) {}

  const displayed = code ? (String(code).startsWith('#') ? String(code) : `#${code}`) : '#NEURO46B';

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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Código de Vinculação</h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto">Compartilhe <span className="text-[#30BBDE]">este código</span> com seus intercambistas para que eles se vinculem com a Instituição.</p>

          <div className="mb-8 flex justify-center">
            <div className="flex items-center justify-center w-64 h-64 border-2 border-[#30BBDE] rounded-full backdrop-blur-sm shadow-2xl">
              <span className="text-3xl md:text-4xl font-mono font-bold text-[#30BBDE] tracking-wider text-center">{displayed}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/dashboard-instituicao')} className="px-6 py-3 rounded-lg bg-[#30BBDE] text-[#001524] font-semibold">Continuar para o Dashboard</button>
            <Link to="/autenticacao" className="px-6 py-3 rounded-lg border border-[#30BBDE] text-[#30BBDE]">Voltar</Link>
          </div>
        </section>
      </main>

      <footer className="w-full flex justify-between items-center px-6 md:px-12 py-6">
        <div />
        <div className="pagination-dots flex gap-3">
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#A0AEC0] opacity-50" />
          <span className="dot w-2.5 h-2.5 rounded-full bg-[#30BBDE] opacity-100" />
        </div>
        <div />
      </footer>
    </div>
  );
}