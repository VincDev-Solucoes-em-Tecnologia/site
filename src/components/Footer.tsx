import { Link } from "react-router-dom";

const Footer = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/vincdev_logo_2.png"
                alt="VinCDEV Logo"
                className="h-8 w-auto"
              />
              <div className="text-white">
                <span className="text-xl font-bold tracking-wider">
                  VINCDEV
                </span>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Soluções em Tecnologia
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Desenvolvimento de sistemas e aplicativos de alta qualidade para
              impulsionar o seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Início
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleAnchorClick(e, "#about")}
                  className="text-gray-400 hover:text-white transition duration-150 cursor-pointer"
                >
                  Sobre
                </a>
              </li>
              <li>
                <Link
                  to="/politica-privacidade"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Política de Privacidade
                </Link>
              </li>
              {/* <li><a href="#services" className="text-gray-400 hover:text-white transition duration-150">Serviços</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-150">Contato</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-gray-400 hover:text-white transition duration-150 cursor-pointer"
                >
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-gray-400 hover:text-white transition duration-150 cursor-pointer"
                >
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-gray-400 hover:text-white transition duration-150 cursor-pointer"
                >
                  Consultoria
                </a>
              </li>
              {/* <li><a href="#services" className="text-gray-400 hover:text-white transition duration-150">Segurança</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Fale Conosco
            </h4>
            <p className="text-gray-400 mb-2">
              Email: vinicioscampera@vincdev.com
            </p>
            <p className="text-gray-400 mb-4">Telefone: +55 (45) 99949-6961</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-150"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-150"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-150"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-150"><Twitter /></a>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VinCDEV. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
