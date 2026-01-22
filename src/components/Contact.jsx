import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h3>
            <p className="text-gray-400 mb-6">Vamos conversar sobre seu projeto</p>
            <form className="contact-form space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nome *" className="p-3 rounded-lg focus:ring-primary focus:border-primary block w-full" required />
                <input type="email" placeholder="Email *" className="p-3 rounded-lg focus:ring-primary focus:border-primary block w-full" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Telefone" className="p-3 rounded-lg focus:ring-primary focus:border-primary block w-full" />
                <input type="text" placeholder="Assunto *" className="p-3 rounded-lg focus:ring-primary focus:border-primary block w-full" required />
              </div>
              <textarea placeholder="Mensagem *" rows="5" className="p-3 rounded-lg focus:ring-primary focus:border-primary block w-full" required></textarea>
              <button type="submit" className="btn-primary px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition duration-300">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-300">contato@vincdev.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">Telefone</h4>
                  <p className="text-gray-300">+55 (11) 9999-9999</p>
                  <p className="text-sm text-gray-500">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">Localização</h4>
                  <p className="text-gray-300">São Paulo, SP</p>
                  <p className="text-sm text-gray-500">Atendimento presencial</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">Horário</h4>
                  <p className="text-gray-300">24/7 Suporte</p>
                  <p className="text-sm text-gray-500">Sempre disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-800 p-10 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar seu projeto?</h3>
          <p className="text-xl text-gray-400 mb-6">Agende uma consulta gratuita e vamos discutir como podemos transformar sua ideia em uma solução tecnológica de sucesso.</p>
          <a href="#contact" className="btn-primary px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition duration-300">
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
