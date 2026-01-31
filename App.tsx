
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <Sponsors />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
