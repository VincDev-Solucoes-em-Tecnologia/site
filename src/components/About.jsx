import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Sobre a VinCDEV</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Somos uma empresa especializada em desenvolvimento de software e aplicativos, com foco em soluções inovadoras que transformam negócios e criam valor real para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <p className="text-lg text-gray-300 mb-6">
              Nossa equipe combina expertise técnica com visão estratégica para entregar projetos que não apenas atendem às necessidades atuais, mas também preparam nossos clientes para o futuro digital.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Nossa Missão</h3>
                <p className="text-gray-300">Transformar ideias em soluções tecnológicas que impulsionam o crescimento e a inovação dos nossos clientes.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Nossa Visão</h3>
                <p className="text-gray-300">Ser reconhecida como referência em desenvolvimento de software, criando soluções que fazem a diferença no mundo digital.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">Nossos Valores</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">Excelência</p>
                    <p className="text-sm text-gray-400">Buscamos a perfeição em cada linha de código e em cada projeto entregue.</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">Inovação</p>
                    <p className="text-sm text-gray-400">Sempre na vanguarda das tecnologias mais modernas e eficientes.</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">Compromisso</p>
                    <p className="text-sm text-gray-400">Dedicação total ao sucesso dos nossos clientes e parceiros.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-6">Nossa Equipe</h3>
            <p className="text-lg text-gray-300 mb-6">
              Profissionais especializados
            </p>
            <p className="text-gray-400 mb-8">
              Contamos com uma equipe multidisciplinar de desenvolvedores, designers e consultores especializados nas mais modernas tecnologias do mercado.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', '.NET', 'Flutter', 'AWS', 'Azure', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-primary transition duration-150">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
