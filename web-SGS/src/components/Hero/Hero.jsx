import React from 'react';

export default function Hero() {
  return (
    // Seção da tela principal
    <section className='relative w-full h-screen flex justify-start items-center mx-auto'>
      <div className={`paddingX max-w-7xl mx-auto flex flex-col gap-5`}>
        {/* Informações da tela principal */}
        <div>
          {/* Título da tela principal */}
          <h1 className={`heroHeadText text-white gray-gradient px-12 rounded-md`}>
            Smart Games {' '}
            {/* Estilização do texto 'Store' com gradiente vermelho */}
            <div className="relative inline-block">
              <span className="red_200 relative z-10">Store</span>
            </div>
          </h1>
          {/* Subtítulo da tela principal */}
          <p className={`heroSubText text-center text-white self-center rounded-md`}>
            Explore, compre, divirta-se!
          </p>
        </div>
      </div>
    </section>
  );
}
