import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SponsorsMarquee from './components/ui/SponsorsMarquee';
import About from './components/sections/About';
import Teams from './components/sections/Teams';
import Documents from './components/sections/Documents';
import Footer from './components/layout/Footer';

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
          <SponsorsMarquee />
          <About />
          <Teams />
          <Documents />
        </main>

        <Footer />
        
      </div>
    </HelmetProvider>
  );
}

export default App;