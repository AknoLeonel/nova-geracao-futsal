import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaFutbol, FaMapMarkerAlt } from 'react-icons/fa';
import PaperDivider from '../ui/PaperDivider';

const stats = [
  { icon: <FaFutbol />, value: "2013", label: "Ano de Fundação" },
  { icon: <FaUsers />, value: "+500", label: "Atletas Formados" },
  { icon: <FaTrophy />, value: "12", label: "Títulos Estaduais" },
  { icon: <FaMapMarkerAlt />, value: "DF", label: "Brasília" },
];

const About = () => {
  return (
    <section id="sobre" className="relative bg-ng-gray pt-20 pb-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ng-green font-bold tracking-widest uppercase mb-2"
          >
            Nossa História
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-bold text-ng-dark uppercase leading-none"
          >
            Mais que um time, <br />
            uma <span className="bg-ng-green text-white px-2 skew-x-[-10deg] inline-block transform">família</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-700 font-body leading-relaxed"
          >
            <p>
              A <span className="font-bold text-ng-black">Associação Atlética Nova Geração</span> nasceu com um propósito claro: transformar vidas através do esporte. Localizados no coração do Distrito Federal, somos referência na formação de atletas de alto rendimento e cidadãos conscientes.
            </p>
            <p>
              Nossa metodologia une disciplina tática, desenvolvimento técnico e valores humanos. Não treinamos apenas para vencer campeonatos, treinamos para vencer na vida.
            </p>
            
            <div className="pt-6">
              <a href="#contato" className="inline-flex items-center text-ng-green font-bold uppercase tracking-wider hover:underline underline-offset-4">
                Conheça nossa estrutura →
              </a>
            </div>
          </motion.div>

          {/* GRID DE ESTATÍSTICAS (CARDS) */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-xl border-l-4 border-ng-green hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-ng-green text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-sans font-bold text-ng-black mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ELEMENTO DECORATIVO (Marca d'água) */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-sans font-bold text-gray-200/40 select-none -z-0 whitespace-nowrap">
        NOVA GERAÇÃO
      </h1>

      {/* RASGO INFERIOR (Prepara para seção escura) */}
      {/* Usamos cor DARK (#111) pois a próxima seção será escura */}
      <PaperDivider position="bottom" color="#111111" />

    </section>
  );
};

export default About;