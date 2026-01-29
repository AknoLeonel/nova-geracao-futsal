import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar a cor da navbar ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Clube', href: '#sobre' },
    { name: 'Equipes', href: '#equipes' },
    { name: 'Editais', href: '#editais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ng-black/95 backdrop-blur-sm border-b border-ng-green/30 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src="/logosf.png" 
              alt="Nova Geração Futsal" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          {/* MENU DESKTOP */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-sans text-lg font-medium text-gray-300 hover:text-ng-green transition-colors uppercase tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ng-green transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="#" className="bg-ng-green text-white px-5 py-2 font-sans font-bold uppercase tracking-wider skew-x-[-10deg] hover:bg-white hover:text-ng-green transition-all">
                <span className="skew-x-[10deg] inline-block">Seja Sócio</span>
              </a>
            </div>
          </div>

          {/* BOTÃO MOBILE (HAMBURGUER) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-ng-green p-2 transition-colors">
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE (FULLSCREEN OVERLAY) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-ng-black border-b-4 border-ng-green shadow-2xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-2xl font-bold text-white hover:text-ng-green uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex space-x-6 mt-6 pt-6 border-t border-gray-800 w-full justify-center">
                <FaInstagram size={30} className="text-gray-400 hover:text-ng-green cursor-pointer" />
                <FaWhatsapp size={30} className="text-gray-400 hover:text-ng-green cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;