import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contato" className="bg-ng-black text-white pt-20 pb-10 border-t border-ng-green/20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Coluna 1: Marca */}
        <div className="col-span-1 md:col-span-2">
          <img 
              src="/logosf.png" 
              alt="Nova Geração Futsal" 
              className="h-20 md:h-20 w-auto object-contain"
            />
          <p className="text-gray-400 max-w-sm mb-6">
            Transformando o cenário do futsal em Brasília. Mais que um time, uma escola de vida para a próxima geração de campeões.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ng-green transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ng-green transition-all">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links */}
        <div>
          <h3 className="font-sans font-bold text-xl mb-6 uppercase tracking-wider">Navegação</h3>
          <ul className="space-y-3 text-gray-400 font-medium">
            <li><a href="#sobre" className="hover:text-ng-green transition-colors">O Clube</a></li>
            <li><a href="#equipes" className="hover:text-ng-green transition-colors">Equipes</a></li>
            <li><a href="#editais" className="hover:text-ng-green transition-colors">Editais</a></li>
            <li><a href="#" className="hover:text-ng-green transition-colors">Seja Sócio</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="font-sans font-bold text-xl mb-6 uppercase tracking-wider">Contato</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-ng-green mt-1" />
              <span>Brasília - DF<br/>Arena Arimateia</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-ng-green" />
              <span>contato@novageracao.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Associação Atlética Nova Geração. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Desenvolvido por <span className="text-ng-green">Akno Tech</span></p>
      </div>
    </footer>
  );
};

export default Footer;