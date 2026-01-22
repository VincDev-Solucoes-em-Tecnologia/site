import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Software',
    description: 'Criamos sistemas personalizados, ERPs, CRMs e soluções web robustas para otimizar seus processos de negócio.',
    details: ['Sistemas Web', 'APIs REST', 'Microserviços', 'Integração de Sistemas'],
  },
  {
    icon: Smartphone,
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com performance excepcional e experiência de usuário única.',
    details: ['Apps Nativos', 'React Native', 'Flutter', 'PWA'],
  },
  {
    icon: Globe,
    title: 'Soluções Web',
    description: 'Sites institucionais, e-commerce e plataformas web modernas com design responsivo e alta performance.',
    details: ['Sites Responsivos', 'E-commerce', 'Landing Pages', 'Portais Web'],
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Arquitetura e otimização de bancos de dados para garantir performance e escalabilidade dos seus sistemas.',
    details: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Implementação de protocolos de segurança avançados para proteger seus dados e sistemas contra ameaças.',
    details: ['Criptografia', 'Autenticação', 'Firewall', 'Backup'],
  },
  {
    icon: Zap,
    title: 'Consultoria Tech',
    description: 'Análise técnica e estratégica para modernizar sua infraestrutura e processos tecnológicos.',
    details: ['Auditoria', 'Modernização', 'Treinamento', 'Suporte'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Nossos Serviços</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Oferecemos soluções tecnológicas completas para impulsionar seu negócio com inovação, qualidade e resultados excepcionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-6 rounded-lg text-left">
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-4 inline-block text-primary hover:text-white transition duration-150 ease-in-out font-medium">
                Saiba Mais
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" className="btn-secondary px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition duration-300">
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
