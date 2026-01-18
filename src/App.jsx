import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SponsorsMarquee from './components/ui/SponsorsMarquee';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-ng-gray min-h-screen font-body selection:bg-ng-green selection:text-white overflow-x-hidden">
        <Helmet>
          <title>A.A. Nova Geração | Futsal Brasília</title>
          <meta name="description" content="Associação Atlética Nova Geração - A maior estrutura de futsal de base do Distrito Federal." />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          
          {/* O Marquee entra logo abaixo do Hero para impacto visual */}
          <SponsorsMarquee />
          
          <About />
          
          {/* Placeholder para a próxima seção (Equipes) */}
          <section id="equipes" className="min-h-screen bg-ng-dark flex items-center justify-center text-white">
            <h2 className="text-4xl font-sans font-bold opacity-20">SEÇÃO EQUIPES EM BREVE</h2>
          </section>
        </main>
        
      </div>
    </HelmetProvider>
  );
}

export default App;