import React, { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Biblioteca() {
  const [pais, setPais] = useState("Brasil");
  const [estado, setEstado] = useState("");

  const regioes = {
    Brasil: [
      "Rio Grande do Sul",
      "Santa Catarina",
      "Paraná",
      "São Paulo",
      "Rio de Janeiro",
      "Minas Gerais",
      "Bahia",
      "Pernambuco",
      "Ceará",
    ],
    Argentina: [
      "Buenos Aires",
      "Córdoba",
      "Santa Fe",
      "Mendoza",
      "Salta",
      "Tucumán",
    ],
    "Estados Unidos": [
      "Califórnia",
      "Nova York",
      "Texas",
      "Flórida",
      "Illinois",
      "Washington",
    ],
    Portugal: [
      "Lisboa",
      "Porto",
      "Coimbra",
      "Braga",
      "Faro",
    ],
    Espanha: [
      "Madrid",
      "Barcelona",
      "Valência",
      "Sevilha",
      "Málaga",
    ],
    Canadá: [
      "Ontário",
      "Quebec",
      "Colúmbia Britânica",
      "Alberta",
      "Manitoba",
    ],
    Japão: [
      "Tóquio",
      "Osaka",
      "Kyoto",
      "Hokkaido",
      "Fukuoka",
    ],
  };

  // Atualizar o estado quando mudar o país
  const handlePaisChange = (e) => {
    const novoPais = e.target.value;
    setPais(novoPais);
    setEstado(""); // limpa o estado quando o país muda
    try {
      localStorage.setItem('bibliotecaPais', novoPais);
      localStorage.removeItem('bibliotecaEstado');
    } catch (err) {
      console.warn('localStorage indisponível', err);
    }
  };

  // Recomendados - com imagens e links diferentes
  const recomendacoes = [
    { id: 1, nome: "Guia de Estudos", imagem: "image1.png", link: "/guia" },
    { id: 2, nome: "Vídeo Aula", imagem: "image2.png", link: "/videos" },
    { id: 3, nome: "Artigos Técnicos", imagem: "image3.png", link: "/artigos" },
    { id: 4, nome: "Cultura", imagem: "image4.png", link: "/idioma" },
    { id: 5, nome: "Ferramentas Úteis", imagem: "image5.png", link: "/ferramentas" },
  ];
  
  useEffect(() => {
    try {
      const savedPais = localStorage.getItem('bibliotecaPais');
      const savedEstado = localStorage.getItem('bibliotecaEstado');
      if (savedPais && Object.keys(regioes).includes(savedPais)) {
        setPais(savedPais);
        if (savedEstado && (regioes[savedPais] || []).includes(savedEstado)) {
          setEstado(savedEstado);
        }
      }
    } catch (err) {
      // se localStorage não estiver disponível, apenas ignore
      console.warn('Erro lendo localStorage', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#182132] text-white font-inter">
      {/* HEADER - mobile-first: clean stacking for small screens, compact on larger */}
      <header className="w-full pt-6 pb-3 sm:pt-8 sm:pb-6 px-3 sm:px-6 bg-[#202A3D]">
        <div className="relative flex items-center justify-center">
          <Link to="/Dashboard" className="text-sm sm:text-base font-semibold text-white/90 absolute left-3 sm:left-6 lg:">Voltar</Link>

          <div className="hidden sm:flex items-center space-x-3 absolute right-3 sm:right-6">
            <div className="flex items-center h-9 px-3 rounded-full bg-[#2E3F5E]">
              <input type="text" placeholder="pesquise aqui" className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-400 w-40" />
            </div>
            <Search className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="text-center mt-3">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">Biblioteca de Recursos</h1>
        </div>

        {/* mobile search full width */}
        <div className="mt-3 sm:hidden flex items-center justify-center">
          <div className="w-full px-2">
            <div className="flex items-center h-9 px-3 rounded-full bg-[#2E3F5E]">
              <input type="text" placeholder="pesquise aqui" className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-400 w-full" />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-col md:flex-row justify-center items-start md:items-start gap-6 px-3 sm:px-8 py-6 sm:py-10">
        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col gap-6 w-full sm:max-w-sm order-2 md:order-1">
          {/* ARTIGOS */}
          <div className="cursor-pointer relative rounded-2xl overflow-hidden h-56 shadow-lg bg-[#202A3D] hover:scale-105 transition">
            <img
              src="Artigos.png"
              alt="Artigos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold uppercase bg-black/40">
              ARTIGOS
            </h2>
          </div>

          {/* VÍDEOS */}
          <div className="cursor-pointer relative rounded-2xl overflow-hidden h-56 shadow-lg bg-[#202A3D] hover:scale-105 transition">
            <img
              src="Videos.png"
              alt="Vídeos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold uppercase bg-black/40">
              VÍDEOS
            </h2>
          </div>
        </div>

        {/* CENTRO */}
        <div className="flex flex-col justify-between gap-8 w-full max-w-2xl order-1 md:order-2">
          {/* DICAS E IDIOMA */}
          <div className="cursor-pointer relative h-[430px] rounded-2xl overflow-hidden shadow-lg flex items-start justify-start p-10 bg-[#202A3D] hover:scale-105 transition">
            <img
              src="Dicas.png"
              alt="Dicas e Idioma"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h2 className="relative z-10 text-6xl font-extrabold uppercase leading-tight bg-black/40 p-3 rounded-lg">
              DICAS E
              <br />
              IDIOMA
            </h2>
          </div>

          {/* SELEÇÃO PAÍS / ESTADO */}
          <div className="flex flex-col gap-6 text-center">
            {/* País */}
            <div>
              <p className="text-2xl uppercase mb-2 font-light">
                SELECIONE O PAÍS
              </p>
              <div className="relative inline-block">
                <select
                  value={pais}
                  onChange={handlePaisChange}
                  className="appearance-none h-9 px-4 pr-8 rounded-full text-sm text-gray-300 bg-[#202D40] outline-none cursor-pointer w-full sm:w-80 hover:bg-[#2E3F5E] transition"
                >
                  {Object.keys(regioes).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Estado / Cidade */}
            <div>
              <p className="text-2xl uppercase mb-2 font-light">
                {pais === "Japão" ? "SELECIONE A PREFEITURA" : "SELECIONE O ESTADO"}
              </p>
              <div className="relative inline-block">
                <select
                  value={estado}
                  onChange={(e) => {
                    const novoEstado = e.target.value;
                    setEstado(novoEstado);
                    try {
                      localStorage.setItem('bibliotecaEstado', novoEstado);
                    } catch (err) {
                      console.warn('localStorage indisponível', err);
                    }
                  }}
                  className="appearance-none h-9 px-4 pr-8 rounded-full text-sm text-gray-300 bg-[#202D40] outline-none cursor-pointer w-full sm:w-80 hover:bg-[#2E3F5E] transition"
                >
                  <option value="">Selecione...</option>
                  {regioes[pais].map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - RECOMENDAÇÕES */}
        <aside className="w-full md:max-w-xs p-4 rounded-2xl shadow-lg bg-[#202D40] order-3 md:order-3 md:ml-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-gray-300 tracking-wider">RECOMENDAÇÕES</h3>
          <div className="flex flex-col gap-4 w-full items-center md:items-stretch">
            {recomendacoes.map((item) => (
              <Link key={item.id} to={item.link} className="relative rounded-xl overflow-hidden h-20 w-full max-w-[280px] mx-auto md:max-w-none md:w-full shadow-md group hover:scale-105 transition">
                <img src={item.imagem} alt={item.nome} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-lg sm:text-xl font-bold">{item.nome}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
