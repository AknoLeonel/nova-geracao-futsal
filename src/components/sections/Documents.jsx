import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const docs = [
  { id: "01", title: "Edital 001/2026 - Seleção de Atletas Sub-13", date: "15 Jan 2026" },
  { id: "02", title: "Prestação de Contas - Temporada 2025", date: "10 Jan 2026" },
  { id: "03", title: "Regulamento Interno - Copa Nova Geração", date: "02 Jan 2026" },
];

const Documents = () => {
  return (
    <section id="editais" className="bg-ng-gray py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-ng-dark/10 pb-4">
          <div>
            <h3 className="text-ng-green font-bold uppercase tracking-widest text-sm mb-1">Transparência</h3>
            <h2 className="text-4xl font-sans font-bold text-ng-dark uppercase">Editais & Documentos</h2>
          </div>
          <a href="#" className="text-ng-dark font-bold hover:text-ng-green underline underline-offset-4 mt-4 md:mt-0 transition-colors">
            Ver arquivo completo
          </a>
        </div>

        <div className="grid gap-4">
          {docs.map((doc, i) => (
            <div 
              key={i} 
              className="group flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-transparent hover:border-ng-green"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="bg-gray-100 p-3 rounded-full text-red-600 group-hover:bg-red-50 transition-colors">
                  <FaFilePdf size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-ng-dark group-hover:text-ng-green transition-colors">
                    {doc.title}
                  </h4>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">Publicado em: {doc.date}</span>
                </div>
              </div>
              
              <button className="mt-4 md:mt-0 px-6 py-2 border border-gray-200 rounded-full flex items-center gap-2 text-sm font-bold text-gray-600 hover:bg-ng-green hover:text-white hover:border-ng-green transition-all whitespace-nowrap w-full md:w-auto justify-center">
                <FaDownload /> Baixar PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;