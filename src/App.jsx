import React, { useState, useEffect, useRef } from 'react';
import './index.css'; 

function App() {
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [activityTitle, setActivityTitle] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [noteText, setNoteText] = useState('');

  const initialActivities = [
    { id: 1, title: '9h20 - Revisão antes de avaliação', description: 'Anotação: Ativar o modo foco até 10h50. Estudar as matérias: Parasitologia, Imunologia, Microbiologia.', completed: false },
    { id: 2, title: '12h - Almoço', description: 'sem descrição', completed: false },
    { id: 3, title: '10h50 - Descanso', description: 'Pausa Pós-Estudo: Saia da frente da tela. Caminhe, ouça música, medite ou faça algo que te relaxe', completed: false },
    { id: 4, title: '15h15 - De volta aos estudos', description: 'Anotação: ativar o modo foco até 10h50; Fazer exercícios das matérias estudas.', completed: false },
  ];
  const [activities, setActivities] = useState(initialActivities);
  const [notes, setNotes] = useState([]);

  const initialTimeInSeconds = 15 * 60;
  const [totalSeconds, setTotalSeconds] = useState(initialTimeInSeconds);
  const [timerState, setTimerState] = useState('stopped');
  const timerIntervalRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTotalSeconds(initialTimeInSeconds);
    setTimerState('stopped');
  };

  useEffect(() => {
    console.log('timer useEffect - state:', timerState);
    // Timer logic: start interval when running, clear when paused/stopped.
    if (timerState === 'running') {
      // avoid multiple intervals
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = setInterval(() => {
        setTotalSeconds(prev => {
          if (prev <= 1) {
            // reached zero
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
            setTimerState('stopped');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [timerState]);

  const handleControlTimer = () => {
    console.log('control button clicked - current state:', timerState, 'totalSeconds:', totalSeconds);
    // Toggle between running and paused/stopped
    if (timerState === 'running') {
      setTimerState('paused');
    } else {
      // if stopped and totalSeconds is 0, reset to initial before starting
      if (totalSeconds === 0) setTotalSeconds(initialTimeInSeconds);
      setTimerState('running');
    }
  };

  const handleSaveActivity = () => {
    // create new activity from modal inputs
    if (!activityTitle.trim()) {
      // ignore empty titles
      return;
    }
    const nextId = activities.length ? Math.max(...activities.map(a => a.id)) + 1 : 1;
    const newActivity = {
      id: nextId,
      title: activityTitle,
      description: activityDescription || 'sem descrição',
      completed: false,
    };
    setActivities(prev => [newActivity, ...prev]);
    // reset modal
    setActivityTitle('');
    setActivityDescription('');
    setIsActivityModalOpen(false);
  };

  const toggleActivityCompletion = (id) => {
    setActivities(prev => prev.map(a => a.id === id ? { ...a, completed: !a.completed } : a));
  };

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    const nextId = notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    const newNote = { id: nextId, text: noteText, completed: false };
    setNotes(prev => [newNote, ...prev]);
    setNoteText('');
    setIsNoteModalOpen(false);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };
  
  const toggleNoteCompletion = (id) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, completed: !n.completed } : n));
  };

  return (
    <>
      {/* --- MODAIS --- */}
      <div id="activity-modal" 
           className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ${isActivityModalOpen ? '' : 'hidden'}`}
      >
        <div className="bg-[#2D3B57] p-6 rounded-xl w-11/12 max-w-md text-white flex flex-col space-y-4 shadow-xl">
          <h2 className="text-lg font-bold text-center text-[#30BBDE]">Adicionar Nova Atividade</h2>
          <div className="flex flex-col space-y-1">
            <label htmlFor="activity-title" className="text-sm font-medium">Título</label>
            <input type="text" id="activity-title" 
              value={activityTitle}
              onChange={(e) => setActivityTitle(e.target.value)}
              className="w-full p-2 text-sm rounded-lg border border-[#374D77] bg-[#182132] text-white focus:outline-none focus:border-[#30BBDE]" placeholder="Ex: 9h20 - Revisão" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="activity-description" className="text-sm font-medium">Descrição</label>
            <textarea id="activity-description" rows={3} 
              value={activityDescription}
              onChange={(e) => setActivityDescription(e.target.value)}
              className="w-full p-2 text-sm rounded-lg border border-[#374D77] bg-[#182132] text-white resize-y focus:outline-none focus:border-[#30BBDE]" placeholder="Adicione uma descrição..."></textarea>
          </div>
          <div className="flex justify-end gap-3 mt-2">
            <button id="save-activity-btn" onClick={handleSaveActivity} className="px-4 py-1.5 rounded-lg font-bold text-xs bg-[#4F77F1] hover:bg-[#3f66d4] cursor-pointer">Salvar</button>
            <button id="cancel-activity-btn" onClick={() => setIsActivityModalOpen(false)} className="px-4 py-1.5 rounded-lg font-bold text-xs bg-transparent border-2 border-[#374D77] text-[#A0AABF] cursor-pointer hover:bg-[#374D77] hover:text-white">Cancelar</button>
          </div>
        </div>
      </div>

      <div id="note-modal" 
           className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ${isNoteModalOpen ? '' : 'hidden'}`}
      >
        <div className="bg-[#2D3B57] p-6 rounded-xl w-11/12 max-w-md text-white flex flex-col space-y-4 shadow-xl">
          <h2 className="text-lg font-bold text-center text-[#30BBDE]">Adicionar Nova Nota</h2>
          <div className="flex flex-col space-y-1">
            <label htmlFor="note-text" className="text-sm font-medium">Nota</label>
            <textarea id="note-text" rows={3} 
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full p-2 text-sm rounded-lg border border-[#374D77] bg-[#182132] text-white resize-y focus:outline-none focus:border-[#30BBDE]" placeholder="Digite sua nota aqui..."></textarea>
          </div>
          <div className="flex justify-end gap-3 mt-2">
            <button id="save-note-btn" onClick={handleSaveNote} className="px-4 py-1.5 rounded-lg font-bold text-xs bg-[#4F77F1] hover:bg-[#3f66d4]">Salvar Nota</button>
            <button id="cancel-note-btn" onClick={() => setIsNoteModalOpen(false)} className="px-4 py-1.5 rounded-lg font-bold text-xs bg-transparent border-2 border-[#374D77] text-[#A0AABF] hover:bg-[#374D77] hover:text-white">Cancelar</button>
          </div>
        </div>
      </div>

      {/* ================================================================
        LAYOUT PRINCIPAL - ESTRUTURA FINAL E ESTÁTICA
        ================================================================
      */}
      <div className="min-h-screen w-full bg-[#182132] font-inter">

        {/* 1. SIDEBAR: FIXA E ABERTA (W-52) - Ajustes de Fonte e Gap */}
        <aside
          className="fixed left-0 top-0 h-screen text-white flex flex-col py-3 px-3 z-20 bg-[#253658] w-52 overflow-x-hidden" 
        >
            {/* LOGO */}
            <div className="flex items-center w-full justify-start pl-2 pt-4 mb-7"> 
                <div className="w-10 h-10 bg-[#4f77f1] rounded-full flex items-center justify-center shrink-0">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                </div>
                <h3 className="text-base font-medium ml-2 opacity-100">Rotinas</h3>
            </div>

            {/* BOTÃO + ADICIONAR (Altura e Cor de Fundo Corrigidas) */}
            <button onClick={() => setIsActivityModalOpen(true)} className="w-full h-13 bg-[#374D77] text-[#30BBDE] border-none rounded-md text-left mb-7 cursor-pointer text-base font-semibold px-2 flex items-center hover:bg-[#3f66d4]">
                <span className="text-lg mr-2">+</span> Adicionar
            </button>

            {/* ITENS DO MENU - Fonte Aumentada (text-base) e Gap Visual Aumentado (mb-2) */}
            {[
                { icon: "/pessoa.png", alt: "Pessoa", text: "Perfil" },
                { icon: "/calendario.png", alt: "Calendário", text: "Calendário" },
                { icon: "/alvo.png", alt: "Alvo", text: "Criador de Rotinas" },
                { icon: "/camera.png", alt: "Câmera", text: "Biblioteca de Recursos" },
                { icon: "/pessoaConfig.png", alt: "Configuração", text: "Configurações" },
                { icon: "/seta.png", alt: "Seta", text: "Diretório de Suporte" }
            ].map((item) => (
                <div key={item.text} className="mt-2 flex items-center p-2 rounded-md h-[45px] cursor-pointer text-white text-base mb-2 hover:bg-[#2c406d]"> 
                    <div className="flex items-center justify-center shrink-0 mr-3">
                        <img src={item.icon} alt={item.alt} className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-normal opacity-100">
                        {item.text}
                    </h4>
                </div>
            ))}
        </aside>

        {/* 2. CONTEÚDO PRINCIPAL: Marigem esquerda FIXA (ml-52) */}
        <div 
          className="ml-52 min-h-screen flex flex-col"
          style={{ width: 'calc(100% - 208px)' }} 
        >
          
            {/* NAV BAR */}
            <nav className="w-full h-24 bg-[#1B2A47] flex items-center justify-between px-6 pl-40">
                <h1 className="text-3xl font-bold text-white">
                    <span className="text-[#30BBDE]">Neuro</span>Planner
                </h1>

                <ul className="flex list-none items-center space-x-3 mr-10">
                    <li className="flex items-center">
                        <img className="w-4 h-4 mr-1.5" src="/lupa.png" alt="Buscar" />
                        <input 
                            type="text" 
                            placeholder="Pesquise aqui" 
                            className="w-[180px] h-9 border-none rounded-full bg-[#2E3F5E] text-[#BCBCBC] text-xs italic pl-3 focus:outline-none" 
                        />
                    </li>
                    <li>
                        <div className="cursor-pointer w-[50px] h-[50px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                            <img src="/perfil.png" alt="Perfil" className="w-[46px] h-[46px]" />
                        </div>
                    </li>
                </ul>
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex flex-col lg:flex-row grow">
                
                {/* SECTION 1 - ATIVIDADES */}
                <section className="flex-1 p-6 lg:pt-8 pl-40 w-full min-h-[799px]">
                    <h1 className="text-5xl font-bold text-white">Atividades da Semana</h1>
                    <h2 className="text-2xl font-bold mt-8 text-white">Hoje</h2>
                    <h1 className='ml-225 text-white font-bold text-2xl cursor-pointer'>...</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2 mr-45">
            {activities.map(activity => (
            <div key={activity.id} className="w-115 h-64 rounded-2xl bg-[#202B41] flex items-center justify-between p-6 pr-6 gap-4">
              <div className="flex flex-col">
                <div className="w-[340px] bg-[#253450] rounded-lg text-white text-sm p-4 mb-3">
                  <p className={activity.completed ? 'line-through text-gray-400' : 'text-white'}>{activity.title}</p>
                </div>
                <div className="w-[340px] h-[120px] bg-[#253450] rounded-lg text-white text-sm p-4 overflow-auto">
                  <p className={activity.completed ? 'line-through text-gray-400' : 'text-white'}>{activity.description}</p>
                </div>
              </div>
              <label className="mb-8 relative cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={activity.completed}
                  onChange={() => toggleActivityCompletion(activity.id)}
                  className="hidden peer" 
                />
                <span className="w-10 h-10 bg-[#3b4b6d] rounded-md inline-block relative cursor-pointer peer-checked:bg-[#4F77F1]"></span>
                <span className="absolute left-3.5 top-2 w-3 h-5 border-solid border-white border-b-2 border-r-2 transform rotate-45 opacity-0 peer-checked:opacity-100"></span>
              </label>
            </div>
            ))}
          </div>
                </section>

                {/* SECTION 2 - NOTAS E FOCO */}
                <section className="flex flex-col items-center justify-around bg-[#182132] h-[799px] w-[400px] p-6 pr-60">
                    
                    {/* BLOCO DE NOTAS */}
                    <div className="w-[450px] h-[350px] rounded-lg bg-[#2D3B57] flex flex-col p-4 text-white justify-between mb-5">
                        <h2 className="text-2xl font-bold mb-3">Bloco de Notas</h2>
                        <div className="grow flex flex-col items-start justify-start text-[#A0AABF] text-m space-y-3 overflow-y-auto w-full">
                        
                        {notes.length === 0 ? (
                            <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-[#A0AABF] rounded-md shrink-0"></div>
                            <p className="text-m">Sem notas por enquanto</p>
                            </div>
                        ) : (
                            notes.map(note => (
                            <div key={note.id} className="flex items-center gap-4 w-full text-white text-sm relative">
                                <label className="relative cursor-pointer shrink-0">
                                <input 
                                    type="checkbox" 
                                    checked={note.completed}
                                    onChange={() => toggleNoteCompletion(note.id)}
                                    className="hidden peer" 
                                />
                                <span className="w-5 h-5 border-2 border-[#A0AABF] rounded-md inline-block peer-checked:bg-[#4F77F1] peer-checked:border-[#4F77F1]"></span>
                                <span className="absolute left-1.5 top-1 w-1.5 h-3 border-solid border-white border-b-2 border-r-2 transform rotate-45 hidden peer-checked:block"></span>
                                </label>
                                <p className={`grow pr-10 break-all ${note.completed ? 'line-through text-gray-400' : 'text-white'}`}>{note.text}</p>
                                <button onClick={() => deleteNote(note.id)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 bg-none border-none cursor-pointer opacity-50 hover:opacity-100">
                                <img src="/lixeira.png" alt="Apagar" className="w-4 h-4 block" />
                                </button>
                            </div>
                            ))
                        )}

                        </div>
                        <button onClick={() => setIsNoteModalOpen(true)} className="cursor-pointer w-3/5 self-center bg-[#4F77F1] text-white border-none rounded-lg h-8 text-xs font-bold hover:bg-[#3f66d4] mt-3">
                            + add nota
                        </button>
                    </div>

                    {/* BLOCO MODO FOCO */}
                    <div className="w-[450px] h-[350px] rounded-lg bg-[#2D3B57] flex flex-col p-4 text-white justify-between">
                        <h2 className="text-2xl font-bold mb-3">Modo Foco</h2>
                        <div className="w-35 h-35 border-2 border-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-2">
                            <p id="timer-display">{formatTime(totalSeconds)}</p>
                        </div>
                        
                        <div className="flex justify-center gap-2 w-4/5 self-center">
                            <button 
                                id="control-timer-btn"
                                onClick={handleControlTimer}
                className="cursor-pointer w-1/2 bg-[#4F77F1] text-white border-none rounded-lg h-8 text-xs font-bold hover:bg-[#3f66d4] disabled:bg-[#374D77] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {timerState === 'running' ? 'Pausar' : (totalSeconds === 0 ? 'Ativar Timer' : 'Iniciar')}
                            </button>
                            <button 
                                id="reset-timer-btn"
                                onClick={resetTimer}
                                className="cursor-pointer w-1/2 bg-transparent border-2 border-[#374D77] text-[#A0AABF] rounded-lg h-8 text-xs font-bold hover:bg-[#374D77] hover:text-white"
                            >
                                Recomeçar
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
      </div>
    </>
  )
}

export default App