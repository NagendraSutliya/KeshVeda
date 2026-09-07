import React from 'react';
import { ingredients } from '../data/ingredients';

const IngredientSpotlight = () => {
  return (
    <section id="ingredients" className="py-20 bg-herbal-900 text-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ayurGold-900 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-herbal-700 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-ayurGold-400 font-bold tracking-widest uppercase text-sm mb-2 block">The Science of Ayurveda</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Power of Pure Jadi-Booti</h2>
          <p className="text-herbal-100 max-w-2xl mx-auto text-lg font-light">
            Every KeshVeda product is powered by centuries-old Ayurvedic wisdom, using only the purest, unadulterated botanical extracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item) => (
            <div key={item.id} className="glass-dark p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-bottom-left">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-ayurGold-200 mb-1">{item.name}</h3>
              <p className="text-xs text-herbal-300 uppercase tracking-wider font-semibold mb-4">{item.hindiName}</p>
              <p className="text-herbal-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientSpotlight;
