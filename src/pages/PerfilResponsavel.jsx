import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PerfilResponsavel() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [contact, setContact] = useState('');
  const [condition, setCondition] = useState('');
  const [meds, setMeds] = useState('');
  const [info, setInfo] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [estudante, setEstudante] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (!raw) return;
      const u = JSON.parse(raw);
      setUser(u);
      setName(u.name || '');
      // If you previously stored birth/contact etc on the user, load them. Otherwise keep empty.
      setBirth(u.birth || '');
      setContact(u.contact || '');
      setCondition(u.condition || '');
      setMeds(u.meds || '');
      setResponsavel(u.responsavel || '');
      setInstituicao(u.instituicao || '');
      setInfo(u.info || '');
      setPhotoPreview(u.photo || '');
    } catch (e) {
      console.error('Erro lendo usuário', e);
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!user || !user.id) {
      alert('Usuário não encontrado. Faça login ou cadastre-se primeiro.');
      return;
    }

    const payload = {
      ...user,
      name,
      birth,
      contact,
      responsavel,
      instituicao,
      condition,
      meds,
      info,
      // Do not pull a stored value into the local field: only save `estudante` when user typed it.
      estudante: estudante === '' ? (user.estudante || '') : estudante,
      photo: photoPreview || user.photo || ''
    };

    (async () => {
      try {
        const res = await fetch(`http://localhost:4000/users/${user.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        let bodyText = null;
        try { bodyText = await res.text(); } catch (e) { /* ignore */ }

        if (!res.ok) {
          console.error('Erro ao salvar perfil - resposta não OK', res.status, bodyText);
          alert(`Erro ao salvar perfil (status ${res.status})\n${bodyText || ''}`);
          return;
        }

        // tentar parsear JSON do body, se houver
        let updated = null;
        try { updated = bodyText ? JSON.parse(bodyText) : null; } catch (e) { updated = null; }

        if (updated) {
          try {
            // evitar estourar quota do localStorage com imagens muito grandes (data URLs)
            if (updated.photo && typeof updated.photo === 'string' && updated.photo.startsWith('data:') && updated.photo.length > 150000) {
              // não armazenar o data URL completo em localStorage
              updated.photo = '';
            }
          } catch (e) {}
          localStorage.setItem('user', JSON.stringify(updated));
          setUser(updated);
        }
        alert('Perfil salvo.');
      } catch (err) {
        console.error('Erro ao salvar perfil', err);
        alert(`Erro ao salvar perfil: ${err.message || err}`);
      }
    })();
  };

  return (
    <div className="min-h-screen w-full font-sans bg-[#0f2432] text-white">
      <header className="pt-5 flex justify-between items-center px-8 py-4 w-full">
        <Link to="/dashboard" className="flex items-center no-underline text-white">
          <img src="/LOGONEURO.png" alt="NeuroPlanner Logo" className="w-12 mr-3 rounded" />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#30BBDE]">Neuro</span>Planner
          </h1>
        </Link>
        <div className="button">
          <button className="bg-transparent border-none">
            <Link to="/dashboard" className="text-white text-xl md:text-2xl no-underline hover:text-[#30BBDE] transition-colors font-semibold">Voltar</Link>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-16">
        <section className="bg-[#0d1a23]/80 rounded-xl p-8 md:p-12 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center gap-8">
          <div className="w-full lg:col-span-1">
            <div className="space-y-6">
              <div>
                <label className="block text-sm md:text-base text-white/80 mb-3 uppercase">Nome</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome completo" className="w-full bg-[#13232c] placeholder-gray-400 text-white p-4 mb-4 rounded-lg text-sm md:text-base" />
              </div>

              <div>
                <label className="block text-sm md:text-base text-white/80 mb-3 uppercase">Contato de emergência</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="(Nome - telefone)" className="w-full bg-[#13232c] placeholder-gray-400 text-white p-4 mb-4 rounded-lg text-sm md:text-base" />
              </div>

              
            </div>
          </div>

          <div className="order-first lg:order-0 w-full flex items-center justify-center mb-6 lg:mb-0 lg:col-auto">
            <div className="flex flex-col items-center">
              {photoPreview ? (
                <img src={photoPreview} alt="avatar" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover mb-3" />
              ) : (
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-300 mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" /><path d="M2 20.5c0-3.037 4.03-5.5 10-5.5s10 2.463 10 5.5V22H2v-1.5z" /></svg>
                </div>
              )}
              <label className="cursor-pointer inline-block text-sm text-[#30BBDE] hover:underline">
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                Alterar foto
              </label>
              <button onClick={handleSave} className="mt-6 mb-4 px-4 py-3 bg-[#4F77F1] rounded-md">Salvar</button>
            </div>
          </div>

          <div className="w-full lg:col-span-1">
            <div>
                <label className="block text-sm md:text-base text-white/80 mb-3 uppercase">ESTUDANTE</label>
                <input value={estudante} onChange={(e) => setEstudante(e.target.value)} type="text" placeholder="Nome do estudante" className="w-full bg-[#13232c] placeholder-gray-400 text-white p-4 mb-4 rounded-lg text-sm md:text-base" />
              </div>

              <div>
                <label className="block text-sm md:text-base text-white/80 mb-3 uppercase">Instituição (opcional)</label>
                <input value={instituicao} onChange={(e) => setInstituicao(e.target.value)} type="text" placeholder="Nome da instituição" className="w-full bg-[#13232c] placeholder-gray-400 text-white p-4 mb-4 rounded-lg text-sm md:text-base" />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}