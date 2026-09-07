import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import HairQuizModal from './components/HairQuizModal';
import ProductCatalog from './components/ProductCatalog';
import CartDrawer from './components/CartDrawer';
import IngredientSpotlight from './components/IngredientSpotlight';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-50 font-sans text-stone-800">
        <Navbar />
        
        <main>
          <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
          <TrustBadges />
          <ProductCatalog />
          <IngredientSpotlight />
          <Testimonials />
          <FAQSection />
        </main>
        
        <Footer />
        
        {/* Modals & Drawers */}
        <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
