import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const qEmail = email.trim().toLowerCase();
    const qPassword = password.trim();

    // Consultar a fake API para autenticar
    fetch(`http://localhost:4000/users?email=${encodeURIComponent(qEmail)}`)
      .then((res) => res.json())
      .then((users) => {
        if (!users || users.length === 0) {
          alert('Usuário não encontrado. Verifique o e-mail ou registre-se primeiro.');
          return;
        }
        // json-server retorna array — pegamos o primeiro com o e-mail solicitado
        const user = users[0];
        if (user.password && user.password === qPassword) {
          localStorage.setItem('user', JSON.stringify(user));
          // redirecionar conforme profile salvo no usuário
          try {
            if (user && user.profile === 'responsible') {
              navigate('/dashboard-responsavel');
              return;
            }
          } catch (e) {}
          navigate('/dashboard');
        } else {
          alert('Senha inválida. Verifique e tente novamente.');
        }
      })
      .catch((err) => {
        console.error('Erro ao autenticar', err);
        alert('Erro ao autenticar');
      });
  };

  return (
    <div className="min-h-screen bg-[#1A202C] text-white flex flex-col items-center">
      <header className="w-full flex items-center px-6 md:px-12 py-6">
        <Link to="/" className="flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-10 md:w-12 mr-3" />
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>
      </header>

      <main className="grow w-full flex items-center justify-center px-4">
        <div className="w-full max-w-sm sm:max-w-md p-8 rounded-lg text-center">
          <img src="/LOGONEURO.png" alt="NeuroPlanner" className="w-24 md:w-28 mx-auto mb-4" />
          <div className="text-3xl md:text-4xl font-semibold mb-8">
            <Link to="/" className="no-underline text-white">
              <span className="text-[#30BBDE]">Neuro</span>Planner
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />

            <div className=" flex items-center justify-between text-sm text-[#A0AEC0]">
              <label className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="cursor-pointer w-4 h-4 accent-[#27a1c0]"
                />
                Lembrar
              </label>
              <Link to="/forgot" className="text-[#33C6EB] hover:text-[#27a1c0] text-xs sm:text-sm">Esqueceu a senha?</Link>
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-lg bg-[#2A5265] text-white font-semibold hover:bg-[#254657] transform hover:-translate-y-0.5 transition"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-sm text-[#A0AEC0]">
            Não tem uma conta? <Link to="/signup" className="text-[#63B3ED] font-semibold">Cadastre-se</Link>
          </div>
        </div>
      </main>
    </div>
  );
}