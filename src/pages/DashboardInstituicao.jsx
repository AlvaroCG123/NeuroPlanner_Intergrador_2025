import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

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
                        { icon: "/calendario.png", alt: "Calendário", text: "Calendário", path: "/calendario" },
                        { icon: "/pessoaConfig.png", alt: "Configuração", text: "Configurações", path: "/configuracoes" }   
                        
                    ].map((item) => (
                        <a key={item.text} href={item.path} className="mt-2 flex items-center p-2 rounded-md h-[45px] cursor-pointer text-white text-base mb-2 hover:bg-[#2c406d] transition duration-150 ease-in-out">
                            <div className="flex items-center justify-center shrink-0 mr-3">
                                <img src={item.icon} alt={item.alt} className="w-7 h-7" />
                            </div>
                            <h4 className="text-base font-normal opacity-100">{item.text}</h4>
                        </a>
                    ))}
                    <div className="mt-4 px-2 text-[#30BBDE] font-bold">#NEURO46B</div>
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
                                                <button onClick={() => window.location.href = '/perfil-responsavel'} className="w-full text-left px-4 py-2 hover:bg-[#273346]">Perfil</button>
                                                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-[#273346]">Sair</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Main Grid Layout */}        
                    <main className="flex-1 p-3 lg:p-8 lg:px-22 flex items-center flex-col justify-center">
                        <div className='flex flex-col self-start'>
                             <h1 className="text-4xl font-bold text-white mb-6">Relatório da semana</h1>
                             <h2 className="text-2xl font-bold text-white mb-6">Hoje</h2>
                        </div>
                    
                    {/* Coluna Esquerda - Relatório */}
                    <section className="flex-1 flex flex-col items-center xl:max-w-[880px] md:ml-0">
                        <div className="bg-[#202b41] rounded-[30px] p-3 sm:p-4 md:p-6 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                            
                            {/* Gráfico Circular */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full flex items-center justify-center border-[#30BBDE] border-6 sm:border-8 md:border-12 lg:border-16">
                                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">{percent}%</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white">Das Atividades</h3>
                                    <p className="text-gray-400 font-light text-lg">Concluídas</p>
                                </div>
                            </div>

                            {/* Informações ao lado do gráfico */}
                            <div className="flex-1 pt-4 md:pl-8 md:mt-8 lg:mt-12 text-center md:text-left w-full">
                                <div className='flex flex-col items-center '>
                                <h3 className="text-3xl  text-white mb-4 pb-10">Das <span className='font-bold'> atividades <br /> dos alunos</span> <br /> concluidas </h3>
                                
                                <div className="bg-[#30BBDE] text-[#ffffff] font-bold text-lg py-2 px-8 rounded-lg inline-block mb-2">
                                    EXCELENTE
                                </div>
                                <p className="text-sm text-gray-400 mb-6">Estudos + Lazer + Pausas + Refeições</p>
                                 </div>
                                 <div className=' flex flex-col items-center'> 
                                
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                </div>
            </div>
        </>
    )
}