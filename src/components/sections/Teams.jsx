import React from 'react';
import { motion } from 'framer-motion';

const teams = [
  { 
    category: "SUB 13", 
    title: "A Base do Futuro", 
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&auto=format&fit=crop",
    desc: "Formação técnica e disciplina tática inicial."
  },
  { 
    category: "SUB 15", 
    title: "Alta Performance", 
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    desc: "Preparação intensiva para competições estaduais."
  },
  { 
    category: "SUB 20", 
    title: "Rumo ao Profissional", 
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    desc: "A última etapa antes do cenário profissional."
  }
];

const Teams = () => {
  return (
    <section id="equipes" className="relative bg-ng-dark py-24 px-4 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-tighter">
            Nossas <span className="text-ng-green">Categorias</span>
          </h2>
          <div className="h-1 w-24 bg-ng-green mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] rounded-sm overflow-hidden cursor-pointer shadow-2xl"
            >
              {/* Imagem de Fundo com Zoom no Hover */}
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={team.image} 
                  alt={team.category} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-ng-black via-transparent to-transparent"></div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="bg-ng-green text-ng-black font-bold text-xs px-2 py-1 inline-block mb-2 skew-x-[-10deg]">
                  {team.category}
                </div>
                <h3 className="text-3xl font-sans font-bold text-white uppercase italic mb-2 group-hover:text-ng-green transition-colors">
                  {team.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {team.desc}
                </p>
                
                {/* Botão Seta */}
                <div className="mt-4 flex items-center gap-2 text-ng-green font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Saiba Mais <span>→</span>
                </div>
              </div>

              {/* Borda animada */}
              <div className="absolute inset-0 border-2 border-ng-green opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;