import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// --- PARTE FUNCIONAL ADICIONADA (Ícone) ---
const LockIcon = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
    </svg>
)

export default function DashboardResponsavel(){
    const [user, setUser] = useState(null)
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const profileMenuRef = useRef(null)

    // --- PARTE FUNCIONAL ADICIONADA (Dados da Semana) ---
    const weekData = [
        { day: 'Seg', emoji: '😃' },
        { day: 'Ter', emoji: '😃' },
        { day: 'Qua', emoji: '😐' },
        { day: 'Quin', emoji: '😃' },
        { day: 'Sab', emoji: '😃' },
        { day: 'Dom', emoji: '😃' },
    ]

    useEffect(() => {
        try {
            const raw = localStorage.getItem('user')
            if (raw) {
                const u = JSON.parse(raw)
                setUser(u)
                fetch(`http://localhost:4000/users?responsavel=${encodeURIComponent(u.name)}`)
                    .then(res => res.json())
                    .then(list => setStudents(Array.isArray(list) ? list : []))
                    .catch(err => { console.error(err); setStudents([]) })
                    .finally(() => setLoading(false))
            } else {
                setLoading(false)
            }
        } catch (e) {
            console.error('Erro ao carregar usuário', e)
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        function handleOutside(e) {
            if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) setShowProfileMenu(false)
        }
        document.addEventListener('click', handleOutside)
        return () => document.removeEventListener('click', handleOutside)
    }, [])

    const handleLogout = () => {
        try { localStorage.removeItem('user') } catch(e){}
        window.location.href = '/login'
    }

    const percent = students.length ? Math.min(100, Math.round(students[0].progress || 0)) : 100

    // --- ESTRUTURA VISUAL DO PRIMEIRO CÓDIGO MANTIDA ABAIXO ---
    return (
        <>
            <div className="min-h-screen w-full bg-[#182132] font-inter">
                {/* Sidebar overlay mobile */}
                {isSidebarOpen && (<div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-40 z-10 lg:hidden" />)}

                <aside className={`fixed left-0 top-0 h-screen text-white flex-col py-3 px-3 z-20 bg-[#253658] w-52 overflow-x-hidden ${isSidebarOpen ? 'flex' : 'hidden'} lg:flex`}>
                    <div className="flex items-center w-full justify-start pl-2 pt-4 mb-7"> 
                        <div className="w-11 h-11 bg-[#4f77f1] rounded-full flex items-center justify-center shrink-0">
                            <img src="/logo.png" alt="Logo" className="w-10 h-9" />
                        </div>
                        <h3 className="text-base ml-2 opacity-100">Rotinas</h3>
                        <button onClick={() => setIsSidebarOpen(false)} className="ml-auto text-white text-xl lg:hidden focus:outline-none">✕</button>
                    </div>

                    <button onClick={() => {}} className="w-full h-13 bg-[#374D77] text-[#30BBDE] border-none rounded-md text-left mb-7 cursor-pointer text-base font-semibold px-2 flex items-center hover:bg-[#3f66d4]">
                        <span className="text-lg mr-2">+</span> Adicionar
                    </button>

                    {[
                        { icon: "/pessoa.png", alt: "Pessoa", text: "Perfil", path: "/perfil" },
                        { icon: "/pessoaConfig.png", alt: "Configuração", text: "Configurações", path: "/configuracoes" },
                        { icon: "/seta.png", alt: "Seta", text: "Diretório de Suporte", path: "/diretorio-suporte" }
                    ].map((item) => (
                        <a key={item.text} href={item.path} className="mt-2 flex items-center p-2 rounded-md h-[45px] cursor-pointer text-white text-base mb-2 hover:bg-[#2c406d] transition duration-150 ease-in-out">
                            <div className="flex items-center justify-center shrink-0 mr-3">
                                <img src={item.icon} alt={item.alt} className="w-7 h-7" />
                            </div>
                            <h4 className="text-base font-normal opacity-100">{item.text}</h4>
                        </a>
                    ))}
                </aside>

                <div className="ml-0 lg:ml-52 min-h-screen flex flex-col w-full lg:w-[calc(100%-208px)]">
                    <nav className="w-full h-24 bg-[#1B2A47] flex items-center justify-between px-4 lg:px-6 pl-4 lg:pl-40"> 
                        <button className="lg:hidden text-white text-2xl focus:outline-none" onClick={() => setIsSidebarOpen(s => !s)}>☰</button>
                        <h1 className="text-xl lg:text-3xl font-bold text-white"><span className="text-[#30BBDE]">Neuro</span>Planner</h1>
                        <ul className="flex list-none items-center space-x-2 mr-0 lg:mr-10">
                            <li className="flex items-center">
                                <img className="w-4 h-4 mr-1 lg:mr-1.5" src="/lupa.png" alt="Buscar" /> 
                                <input type="text" placeholder="Pesquise aqui" className="w-32 lg:w-[180px] h-8 lg:h-9 border-none rounded-full bg-[#2E3F5E] text-[#BCBCBC] text-xs italic pl-3 focus:outline-none" />
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    {user && user.name ? (<div className="hidden lg:block text-white text-sm mr-2">{user.name}</div>) : null}
                                    <div ref={profileMenuRef} className="relative">
                                        <button onClick={() => setShowProfileMenu(s => !s)} className="cursor-pointer w-9 h-9 lg:w-[50px] lg:h-[50px] rounded-full bg-[#D9D9D9] flex items-center justify-center shrink-0 overflow-hidden">
                                            <img src={user && user.photo ? user.photo : '/perfil.png'} alt="Perfil" className="w-8 h-8 lg:w-[46px] lg:h-[46px] object-cover" />
                                        </button>
                                        {showProfileMenu && (
                                            <div className="absolute right-0 mt-2 w-44 bg-[#1B2A47] text-white rounded-md border border-[#2b3b52] overflow-hidden z-50">
                                                <button onClick={() => window.location.href = '/perfil'} className="w-full text-left px-4 py-2 hover:bg-[#273346]">Perfil</button>
                                                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-[#273346]">Sair</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Main Grid Layout */}
                <main className="flex-1 p-6 lg:p-10 flex flex-col xl:flex-row gap-6">
                    
                    {/* Coluna Esquerda - Relatório */}
                    <section className="flex-1 flex flex-col">
                        <h1 className="text-4xl font-bold text-white mb-8">Relatório da semana</h1>
                        
                        <h2 className="text-2xl font-bold text-white mb-4">Hoje</h2>

                        <div className="bg-[#202b41] rounded-[30px] p-8 lg:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
                            
                            {/* Gráfico Circular */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-64 h-64 rounded-full border-16 border-[#30BBDE] flex items-center justify-center">
                                    <span className="text-6xl font-extrabold text-white">{percent}%</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white">Das Atividades</h3>
                                    <p className="text-gray-400 font-light text-xl">Concluídas</p>
                                </div>
                            </div>

                            {/* Informações ao lado do gráfico */}
                            <div className="flex-1 pt-4 md:pl-8 text-center md:text-left w-full">
                                <div className='flex flex-col items-center'>
                                <h3 className="text-3xl font-bold text-white mb-4">Consistencia na rotina:</h3>
                                
                                <div className="bg-[#30BBDE] text-[#ffffff] font-bold text-lg py-2 px-10 rounded-lg inline-block mb-2">
                                    EXCELENTE
                                </div>
                                <p className="text-sm text-gray-400 mb-10">Estudos + Lazer + Pausas + Refeições</p>
                                 </div>
                                 <div className=' flex flex-col items-center'>               
                                <h3 className="text-3xl font-bold text-white mb-4">Bem-Estar:</h3>
                                
                                {/* Grid de Dias e Emojis - AGORA FUNCIONA */}
                                <div className="grid grid-cols-6 gap-2 max-w-md mx-auto md:mx-0 mb-6">
                                    {weekData.map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2">
                                            <span className="text-gray-400 text-sm font-medium">{item.day}</span>
                                            <span className="text-3xl">{item.emoji}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-base">
                                    <span>😐</span>
                                    <span>1 quebra de padrão durante a semana</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Coluna Direita - Widgets */}
                    <section className="w-full xl:w-[380px] flex flex-col gap-6 xl:mt-0 lg:ml-8 mr-0"> 
                        
                        {/* Card Post-its */}
                        <div className="w-full aspect-square rounded-lg bg-[#2D3B57] flex flex-col p-4 text-white justify-between my-2 lg:my-0 lg:mb-5 lg:w-[450px] lg:h-[350px]">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Post-its virtuais</h3>
                                <p className="text-gray-400 text-sm mb-6">Sem post-its por enquanto</p>
                            </div>
                            <button className="w-full bg-[#4F77F1] hover:bg-[#3e63d6] text-white font-medium py-3 rounded-lg transition-colors">
                                + add post-its
                            </button>
                        </div>

                        {/* Card Bloqueado - AGORA FUNCIONA */}
                        <div className="w-full aspect-square rounded-lg bg-[#2D3B57] flex flex-col p-4 text-white justify-between my-2 lg:my-0 lg:mb-5 lg:w-[450px] lg:h-[350px]">
                               <div className=" rounded-xl p-6 flex flex-col items-center justify-center h-72 lg:h-[470px]">
                                    <div className="mb-4 flex items-center justify-center">
                                        <LockIcon className="w-24 h-24 lg:w-36 lg:h-36" />
                                    </div>
                                    <div className="text-lg font-semibold text-center">Bloqueado pelo estudante</div>
                               </div>
                        </div>

                    </section>

                </main>
                </div>
            </div>
        </>
    )
}