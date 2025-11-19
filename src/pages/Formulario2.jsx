import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Formulario2() {

  const [dicaVisivel, setDicaVisivel] = useState(false); 

  const handleClick = () => {
    setDicaVisivel(!dicaVisivel); 
  };

   return (
      <div className="min-h-screen w-full font-sans flex flex-col bg-[#182132] items-center justify-center lg:justify-center py-4 lg:py-0 px-4 lg:px-0">
        <section className='flex flex-col gap-8 lg:gap-10 md:bg-[#202D40] bg-transparent rounded-3xl lg:rounded-4xl p-6 lg:px-39 lg:pt-5 lg:pb-20 max-w-4xl lg:max-w-none'>
          <p className='text-[#6E8FCE] text-lg lg:text-2xl'>2/6</p>
          <div className='flex flex-col gap-8 lg:gap-10'>
            <p className='text-[white] text-2xl lg:text-4xl text-start lg:text-center'>Qual tipo de ambiente de estudo você considera mais produtivo?</p>
  
            <button className='text-[white] bg-[#273346] p-4 lg:p-4.5 rounded-2xl lg:rounded-3xl text-base lg:text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
              Qualquer um, desde que eu esteja focado.
            </button>
  
            <button className='text-[white] bg-[#273346] p-4 lg:p-4.5 rounded-2xl lg:rounded-3xl text-base lg:text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
              Com algum barulho ambiente, como de um café ou biblioteca movimentada.
            </button>
  
            <button className='text-[white] bg-[#273346] p-4 lg:p-4.5 rounded-2xl lg:rounded-3xl text-base lg:text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
              Silenciosos, com o mínimo de ruído e sem música.
            </button>
  
            <button className='text-[white] bg-[#273346] p-4 lg:p-4.5 rounded-2xl lg:rounded-3xl text-base lg:text-2xl text-left hover:bg-[#17263f] focus:bg-[#17263f] cursor-pointer'>
              Com música instrumental ou sons da natureza.
            </button>
  
            <div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                <button
                  onClick={handleClick} 
                  className="text-[white] font-bold text-base lg:text-xl cursor-pointer w-full lg:w-auto text-center lg:text-left"
                >
                  {dicaVisivel ? 'Esconder Dica' : 'Mostrar Dica'} 
                </button>
  
                <div className='flex gap-9'>
                  <Link to="/Formulario1"> 
                  <button className="text-[white]  hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                     Voltar
                  </button>
                  </Link>
                  
                  <Link to="/Formulario3"><button className="text-[white] bg-[#182132] hover:bg-[#2e64c2] rounded-3xl px-6 py-1.5 text-xl cursor-pointer">
                     Avançar
                  </button>
                  </Link>
                </div>
              </div>
  
              {dicaVisivel && (
                <p className="mt-4 bg-[#273346] p-4 lg:p-4.5 rounded-2xl lg:rounded-3xl text-base lg:text-xl text-left text-[#8BC0FF]">
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