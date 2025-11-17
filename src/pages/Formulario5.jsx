import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Formulario5() {

  const [dicaVisivel, setDicaVisivel] = useState(false); 

  const handleClick = () => {
    setDicaVisivel(!dicaVisivel); 
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-[#182132] items-center justify-center ">
    <section className='flex flex-col gap-10 bg-[#202D40] rounded-4xl px-39 pt-5 pb-20'>
      <p className='text-[#6E8FCE] text-2xl'>5/6</p>
      <div className='flex flex-col gap-10'>
        <p className='text-[white] text-4xl text-center'>Considerando a adaptação ao intercâmbio, você acredita <br/>  que ter um horário de sono fixo é importante para você?</p>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
        <p>Sim, ter um horário fixo para acordar e dormir é essencial.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Apenas tento dormir o suficiente, sem me preocupar com horários fixos.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Só me preocupo com o sono em dias de prova.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Não, prefiro flexibilidade e durmo quando sinto sono.</p></button>

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
                  <Link to="/Formulario4"> Voltar</Link>
                </button>
                
                <button className="text-[white] bg-[#182132] hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                  <Link to="/Formulario6"> Avançar</Link>
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