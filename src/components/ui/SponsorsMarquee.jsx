import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  "GOVERNO DO DISTRITO FEDERAL", "SECRETARIA DE ESPORTE", "DEP. HERMETO", 
  "LIGA CANDANGA", "BRASAL REFRIGERANTES", "ESB SERVIÇOS", 
  "QUALIGRAF", "ÁGUIA", "NOVA GERAÇÃO"
];

const SponsorsMarquee = () => {
  return (
    <div className="relative w-full bg-ng-black py-8 border-y border-ng-green/20 overflow-hidden flex items-center">
      
      {/* Container "Máscara" com gradiente nas pontas para suavizar a entrada/saída */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ng-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ng-black to-transparent z-10 pointer-events-none"></div>

      {/* A Pista que corre (Track) */}
      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: "-50%" }} // Move metade do tamanho total (que é o loop)
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 // Ajuste a velocidade aqui (maior = mais lento)
        }}
        style={{ width: "max-content" }} // Garante que não quebre linha
      >
        {/* Renderiza a lista 2 vezes para garantir o loop perfeito */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-default">
            {/* Um pequeno ponto separador estilo "Bullet" */}
            <span className="w-2 h-2 rounded-full bg-ng-green opacity-50"></span>
            
            <span className="text-gray-500 font-sans font-bold text-xl md:text-3xl uppercase tracking-tighter opacity-60 group-hover:text-white group-hover:opacity-100 transition-all duration-300">
              {sponsor}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SponsorsMarquee;