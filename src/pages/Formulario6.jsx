import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Formulario6() {

  const [dicaVisivel, setDicaVisivel] = useState(false); 

  const handleClick = () => {
    setDicaVisivel(!dicaVisivel); 
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col bg-[#182132] items-center justify-center ">
    <section className='flex flex-col gap-10 bg-[#202D40] rounded-4xl px-39 pt-5 pb-20'>
      <p className='text-[#6E8FCE] text-2xl'>6/6</p>
      <div className='flex flex-col gap-10'>
        <p className='text-[white] text-4xl text-center'>Quando se sente sobrecarregado(a) com as informações de estudo, <br /> qual estratégia usa para processar o conteúdo?</p>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Mudar para outra tarefa quando me sinto sobrecarregado.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Tentar absorver todo o conteúdo de uma vez para não perder o fio.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Ignorar a sobrecarga e seguir em frente.</p></button>

        <button className='text-[white] bg-[#273346] p-4.5 rounded-3xl text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
          <p>Dividir o conteúdo em partes menores e estudar uma parte por vez.</p></button>

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
                  <Link to="/Formulario5"> Voltar</Link>
                </button>
                
                <button className="text-[white] bg-[#182132] hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                  <Link to="/dashboard"> Avançar</Link>
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