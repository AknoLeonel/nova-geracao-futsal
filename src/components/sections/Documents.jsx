import React, { useState } from 'react';
import CountUp from 'react-countup';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  X, 
  ZoomIn, 
  CheckCircle, 
  Download, 
  ExternalLink, 
  Calendar, 
  FolderOpen 
} from 'lucide-react';

// Dados fornecidos por você
const docs = [
  { id: "01", title: "Edital 001/2026 - Seleção de Atletas Sub-13", date: "15 Jan 2026" },
  { id: "02", title: "Prestação de Contas - Temporada 2025", date: "10 Jan 2026" },
  { id: "03", title: "Regulamento Interno - Copa Nova Geração", date: "02 Jan 2026" },
];

const Documents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Caminho da imagem na pasta public
  const docImage = "/fomen.jpeg";

  return (
    <section id="editais" className="py-20 bg-ng-gray relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-ng-dark/10 pb-6">
          <div>
            <h3 className="text-ng-green font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
              <CheckCircle size={16} /> Transparência
            </h3>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-ng-dark uppercase leading-tight">
              Editais & <br /> Documentos
            </h2>
          </div>
          <div className="text-right mt-6 md:mt-0">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-ng-green text-sm font-bold shadow-sm mb-2 border border-ng-green/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Documentação Oficial</span>
             </div>
             <p className="text-gray-500 max-w-xs text-sm ml-auto font-medium">
               Acesso público aos regulamentos e editais da Nova Geração.
             </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LADO ESQUERDO: Estatísticas e Lista */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            
            {/* Título da Seção */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-ng-dark uppercase tracking-tight">
                Arquivos Públicos
              </h3>
              <div className="h-1.5 w-24 bg-ng-green mt-3 rounded-full"></div>
            </motion.div>

            {/* Grid de Stats (Adaptado para o contexto de documentos) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Total de Arquivos */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-ng-green relative overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 text-gray-500">
                  <FolderOpen size={20} className="text-ng-green" />
                  <span className="text-sm font-bold uppercase tracking-wider">Disponíveis</span>
                </div>
                <div className="text-4xl font-sans font-bold text-ng-dark flex items-baseline gap-2">
                  <CountUp end={docs.length} duration={2} />
                  <span className="text-lg text-gray-400 font-medium">Arquivos</span>
                </div>
              </motion.div>

              {/* Card 2: Ano Vigente */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-ng-green relative overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 text-gray-500">
                  <Calendar size={20} className="text-ng-green" />
                  <span className="text-sm font-bold uppercase tracking-wider">Temporada</span>
                </div>
                <div className="text-4xl font-sans font-bold text-ng-dark">
                  <CountUp end={2026} duration={2.5} separator="" />
                </div>
              </motion.div>
            </div>

            {/* Lista de Downloads (Seus dados reais) */}
            <div className="mt-4">
              <h4 className="text-gray-500 font-bold uppercase text-xs mb-4 tracking-wider flex items-center gap-2">
                <FileText size={14} /> Lista de Downloads
              </h4>
              
              <div className="space-y-4">
                {docs.map((doc, index) => (
                  <motion.div 
                    key={doc.id}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <div className="mb-3 md:mb-0">
                      <div className="text-ng-green font-bold text-xs uppercase mb-1 tracking-wide flex items-center gap-2">
                        <span>DATA: {doc.date}</span>
                      </div>
                      <div className="text-ng-dark font-bold text-lg leading-tight group-hover:text-ng-green transition-colors">
                        {doc.title}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 group-hover:bg-ng-green group-hover:text-white rounded-full transition-colors text-sm font-bold whitespace-nowrap">
                      <Download size={16} /> Baixar PDF
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Preview da Imagem (Fomen) */}
          <div className="lg:w-1/3">
             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="h-full bg-white p-4 rounded-lg shadow-md border border-gray-100 flex flex-col"
             >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-ng-dark font-bold uppercase text-xs tracking-wider">
                    <ExternalLink size={16} className="text-ng-green" />
                    Visualização
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded">
                    Documento Oficial
                  </div>
                </div>
                
                {/* Container da Imagem com efeito de Zoom */}
                <div 
                  className="relative flex-grow min-h-[400px] w-full bg-gray-100 rounded overflow-hidden cursor-pointer group hover:shadow-inner transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                   <img 
                      src={docImage} 
                      alt="Prévia do Documento Oficial" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                   />
                   
                   {/* Overlay com botão de ampliar */}
                   <div className="absolute inset-0 flex items-center justify-center bg-ng-dark/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                      <div className="bg-white text-ng-dark px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                        <ZoomIn size={18} /> Ampliar
                      </div>
                   </div>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-ng-dark hover:bg-ng-green text-white font-bold uppercase text-xs tracking-widest rounded transition-colors duration-300"
                  >
                    Visualizar na Íntegra
                  </button>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* MODAL (Lightbox) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ng-dark/90 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-ng-green p-2 transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={docImage} 
              alt="Documento Ampliado"
              className="max-w-full max-h-[90vh] rounded shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Documents;