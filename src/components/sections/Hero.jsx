import React from 'react';
import { motion } from 'framer-motion';
import PaperDivider from '../ui/PaperDivider'; // Certifique-se que o arquivo existe nessa pasta!

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-ng-black">
      
      {/* IMAGEM DE FUNDO COM OVERLAY */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder: substitua a URL pela foto do jogador de costas (Léo 14) */}
        <img 
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop" 
          alt="Jogador Nova Geração" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
        />
        {/* Gradiente para garantir leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-ng-black via-ng-black/50 to-transparent"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-xl md:text-2xl text-ng-green font-bold tracking-[0.2em] uppercase mb-2">
            Brasília - Distrito Federal
          </h2>
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter mb-6 drop-shadow-lg">
            NOVA <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GERAÇÃO</span>
          </h1>
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Formando atletas, construindo cidadãos. A maior estrutura de futsal de base do DF agora com matrícula aberta.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-ng-green text-white font-sans text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-ng-green transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,158,79,0.5)] skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">Nossas Equipes</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-sans text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-ng-black transition-all transform skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">Sobre o Clube</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* EFEITO DE PAPEL RASGADO NA BASE */}
      {/* Usamos cor cinza claro para conectar com a próxima seção */}
      <PaperDivider position="bottom" color="#f3f3f3" />
      
    </section>
  );
};

export default Hero;