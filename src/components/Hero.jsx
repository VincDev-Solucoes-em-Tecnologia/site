import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white">
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/vincdev-logo.jpeg" 
            alt="VinCDEV Logo" 
            className="h-24 w-auto floating-animation"
          />
        </div>

        <h1 className="hero-title uppercase">VINCDEV</h1>
        <p className="hero-subtitle mb-8">Soluções em Tecnologia</p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Transformamos suas ideias em <span className="text-primary">soluções tecnológicas inovadoras</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Desenvolvemos sistemas e aplicativos de alta qualidade que impulsionam o crescimento do seu negócio com tecnologia de ponta e design excepcional.
        </p>

        {/* <div className="flex justify-center space-x-4">
          <a href="#contact" className="btn-primary px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition duration-300 flex items-center">
            Iniciar Projeto →
          </a>
          <a href="#portfolio" className="btn-secondary px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition duration-300">
            Ver Portfólio
          </a>
        </div> */}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4">
            <p className="text-4xl font-bold text-primary">5+</p>
            <p className="text-gray-400">Projetos Entregues</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-gray-400">Satisfação do Cliente</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-primary">24/7</p>
            <p className="text-gray-400">Suporte Técnico</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
