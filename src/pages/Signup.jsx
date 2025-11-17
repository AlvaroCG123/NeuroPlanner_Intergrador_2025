import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envia os dados para a fake API (json-server)
    // Normalize email/password to avoid mismatches (trim + lowercase for email)
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    // Prepare payload
    const payload = {
      name: name.trim(),
      email: normalizedEmail,
      password: normalizedPassword,
      // armazenamos apenas a URL do preview local. Em um backend real, você guardaria o path/URL retornado
      photo: preview || ''
    };

    fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((user) => {
        // salvar usuario no localStorage para manter sessão simples
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/welcome');
      })
      .catch((err) => {
        console.error('Erro ao criar usuário', err);
        navigate('/welcome');
      });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
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
            <Link to="/sobre" className="no-underline text-white">
              <span className="text-[#30BBDE]">Neuro</span>Planner
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col items-center">
              {preview ? (
                <img src={preview} alt="preview" className="w-28 h-28 rounded-full object-cover mb-3" />
              ) : (
                <div className="w-28 h-28 rounded-full bg-[#202D40] mb-3 flex items-center justify-center text-[#A0AEC0]">Foto</div>
              )}
              <label className="cursor-pointer inline-block text-sm text-[#30BBDE] hover:underline">
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                Escolher foto de perfil
              </label>
            </div>

            
            <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#202D40] text-white placeholder-[#A0AEC0] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#30BBDE]"
            />
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#A0AEC0] mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="cursor-pointer w-4 h-4 accent-[#30BBDE]"
                required
              />
              <label htmlFor="terms">
                Concordo com os <Link to="/termos" className="text-[#30BBDE] hover:text-[#258aa3] font-medium">Termos e Condições</Link>
              </label>
            </div>
            <button
              type="submit"
              className=" cursor-pointer mt-6 w-full py-3 rounded-lg bg-[#2A5265] text-white font-semibold hover:bg-[#234453] transform hover:-translate-y-0.5 transition"
              disabled={!terms}
            >
              Cadastre-se
            </button>
          </form>

          <div className="mt-6 text-sm text-[#A0AEC0]">
            Já tem uma conta? <Link to="/login" className="text-[#30BBDE] font-semibold">Entre</Link>
          </div>
        </div>
      </main>
    </div>
  );
}