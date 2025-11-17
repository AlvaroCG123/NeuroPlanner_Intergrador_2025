import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Formulario1() {

  const [dicaVisivel, setDicaVisivel] = useState(false); 

  const handleClick = () => {
    setDicaVisivel(!dicaVisivel); 
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-[#182132] items-center justify-center ">
    <section className='flex flex-col gap-10 bg-[#202D40] rounded-4xl px-39 pt-5 pb-20'>
      <p className='text-[#6E8FCE] text-2xl'>1/6</p>
      <div className='flex flex-col gap-10'>
        <p className='text-[white] text-4xl text-center'>Qual tipo de ambiente de estudo você considera mais produtivo?</p>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          Qualquer um, desde que eu esteja focado.</button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          Com algum barulho ambiente, como de um café ou biblioteca movimentada.</button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          Silenciosos, com o mínimo de ruído e sem música.</button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          Com música instrumental ou sons da natureza.</button>

          <div>
            <div className="flex justify-between">
              <button
                onClick={handleClick} 
                className="text-[white] font-bold text-xl cursor-pointer bg-" >

                {dicaVisivel ? 'Esconder Dica' : 'Mostrar Dica'} 
              </button>

                {/* troca de paginas */}
            {/*<Link to="/Formulario1"> Começar</Link> */}
              <button className="text-[white] bg-[#182132] hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                <Link to="/Formulario2"> Avançar</Link>
              </button>
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