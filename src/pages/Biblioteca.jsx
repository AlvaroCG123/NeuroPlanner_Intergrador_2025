import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Biblioteca() {
  const [pais, setPais] = useState("Brasil");
  const [estado, setEstado] = useState("Rio Grande do Sul");

  const paises = ["Brasil", "Argentina", "Estados Unidos", "Portugal"];
  const estados = [
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná",
    "São Paulo",
    "Rio de Janeiro",
  ];

  // Recomendados - com imagens e links diferentes
  const recomendacoes = [
    {
      id: 1,
      nome: "Guia de Estudos",
      imagem: "image1.png",
      link: "/guia",
    },
    {
      id: 2,
      nome: "Vídeo Aula",
      imagem: "image2.png",
      link: "/videos",
    },
    {
      id: 3,
      nome: "Artigos Técnicos",
      imagem: "image3.png",
      link: "/artigos",
    },
    {
      id: 4,
      nome: "Dicas de Inglês",
      imagem: "image4.png",
      link: "/idioma",
    },
    {
      id: 5,
      nome: "Ferramentas Úteis",
      imagem: "image5.png",
      link: "/ferramentas",
    },
  ];

  return (
    <div className="min-h-screen bg-[#182132] text-white font-inter">
      {/* HEADER */}
      <header className="w-full py-6 px-6 flex items-center justify-between bg-[#202A3D]">
        {/* Pesquisa */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center h-9 px-3 rounded-full bg-[#2E3F5E]">
            <input
              type="text"
              placeholder="pesquise aqui"
              className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-400 w-40"
            />
          </div>
          <Search className="w-7 h-7 text-gray-400 cursor-pointer" />
        </div>

        {/* Título */}
        <h1 className="text-4xl font-semibold">Biblioteca de Recursos</h1>

        {/* Voltar */}
        <Link
          to="/Dashboard"
          className="text-2xl font-semibold hover:opacity-80 transition"
        >
          Voltar
        </Link>
      </header>

      {/* MAIN */}
      <main className="flex flex-col lg:flex-row justify-center gap-8 px-8 py-10">
        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col gap-8 w-full max-w-sm">
          {/* ARTIGOS */}
          <div className="relative rounded-2xl overflow-hidden h-56 shadow-lg bg-[#202A3D] hover:scale-105 transition">
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
          <div className="relative rounded-2xl overflow-hidden h-56 shadow-lg bg-[#202A3D] hover:scale-105 transition">
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
        <div className="flex flex-col justify-between gap-8 w-full max-w-2xl">
          {/* DICAS E IDIOMA */}
          <div className="relative h-[430px] rounded-2xl overflow-hidden shadow-lg flex items-start justify-start p-10 bg-[#202A3D] hover:scale-105 transition">
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
                  onChange={(e) => setPais(e.target.value)}
                  className="appearance-none h-9 px-4 pr-8 rounded-full text-sm text-gray-300 bg-[#202D40] outline-none cursor-pointer w-80 hover:bg-[#2E3F5E] transition"
                >
                  {paises.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Estado */}
            <div>
              <p className="text-2xl uppercase mb-2 font-light">
                SELECIONE O ESTADO
              </p>
              <div className="relative inline-block">
                <select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className="appearance-none h-9 px-4 pr-8 rounded-full text-sm text-gray-300 bg-[#202D40] outline-none cursor-pointer w-80 hover:bg-[#2E3F5E] transition"
                >
                  {estados.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - RECOMENDAÇÕES */}
        <aside className="w-full max-w-xs p-5 rounded-2xl shadow-lg bg-[#202D40]">
          <h3 className="text-lg font-semibold mb-4 text-gray-300 tracking-wider">
            RECOMENDAÇÕES
          </h3>
          <div className="flex flex-col gap-4">
            {recomendacoes.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="relative rounded-xl overflow-hidden h-24 w-full shadow-md group hover:scale-105 transition"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-xl font-bold">{item.nome}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
