import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Formulario3() {

  const [dicaVisivel, setDicaVisivel] = useState(false); 

  const handleClick = () => {
    setDicaVisivel(!dicaVisivel); 
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-[#182132] items-center justify-center ">
    <section className='flex flex-col gap-10 bg-[#202D40] rounded-4xl px-39 pt-5 pb-20'>
      <p className='text-[#6E8FCE] text-2xl'>4/6</p>
      <div className='flex flex-col gap-10'>
        <p className='text-[white] text-4xl text-center'>Qual estratégia você considera mais eficaz para iniciar <br /> uma tarefa de estudo quando enfrenta dificuldade?</p>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Pedir a alguém para me supervisionar.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Esperar por um pico de motivação.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Definição de metas claras e pequenas etapas.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Início imediato de tarefa, sem pensar muito.</p></button>

          <div>
            <div className="flex justify-between">
              <button
                onClick={handleClick} 
                className="text-[white] font-bold text-xl cursor-pointer bg-" >

                {dicaVisivel ? 'Esconder Dica' : 'Mostrar Dica'} 
              </button>

                {/* troca de paginas */}
           <div className='flex gap-9'>
              <button className="text-[white]  hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                <Link to="/Formulario3"> Voltar</Link>
              </button>
              
              <button className="text-[white] bg-[#182132] hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                <Link to="/Formulario5"> Avançar</Link>
              </button>
            </div>
          </div>

            {dicaVisivel && (
              <p className=" mt-4 bg-[#273346] p-4.5 rounded-3xl text-xl text-left text-[#8BC0FF]">
                DICA: Considere como diferentes níveis de ruído e estímulos
                afetam sua concentração.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}