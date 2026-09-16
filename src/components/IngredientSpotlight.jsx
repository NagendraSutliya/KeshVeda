import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ingredients } from '../data/ingredients';

const IngredientSpotlight = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  return (
    <section id="ingredients" className="py-20 bg-herbal-900 text-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ayurGold-900 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-herbal-700 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-ayurGold-400 font-bold tracking-widest uppercase text-sm mb-2 block">The Science of Ayurveda</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Power of 25+ Pure Jadi-Booties</h2>
          <p className="text-herbal-100 max-w-3xl mx-auto text-lg font-light">
            Every KeshVeda product is powered by a potent blend of more than 25 rare Ayurvedic herbs, using only the purest, unadulterated botanical extracts for your hair and skin.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {ingredients.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedIngredient(item)}
              className="glass-dark px-6 py-3 rounded-full flex items-center gap-3 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-ayurGold-900/20 relative"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div className="flex flex-col">
                <span className="text-ayurGold-200 font-serif font-medium leading-tight">{item.name}</span>
                <span className="text-[10px] text-herbal-300 uppercase tracking-wider">{item.hindiName}</span>
              </div>

              {/* Custom Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-3 bg-herbal-950/95 backdrop-blur-md border border-ayurGold-900/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                <p className="text-xs text-herbal-100 leading-relaxed font-light line-clamp-3 text-center">
                  {item.description}
                </p>
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-herbal-950/95 border-b border-r border-ayurGold-900/50 transform rotate-45"></div>
              </div>
            </div>
          ))}
          <div className="bg-ayurGold-900 px-6 py-3 rounded-full flex items-center gap-3 hover:-translate-y-1 hover:bg-ayurGold-500 transition-all duration-300 shadow-lg shadow-ayurGold-900/30 cursor-default group">
            <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
            <div className="flex flex-col">
              <span className="text-white font-serif font-medium leading-tight">And Many More</span>
              <span className="text-[10px] text-ayurGold-100 uppercase tracking-wider">Secret Herbs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredient Detail Modal */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-herbal-950/80 backdrop-blur-sm" onClick={() => setSelectedIngredient(null)}>
          <div 
            className="bg-herbal-900 border border-ayurGold-900/50 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 text-herbal-300 hover:text-ayurGold-400 hover:bg-white/5 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6 mt-4">
              <div className="text-6xl mb-4 transform hover:scale-110 transition-transform">{selectedIngredient.icon}</div>
              <h3 className="text-3xl font-serif font-bold text-ayurGold-400 mb-1">{selectedIngredient.name}</h3>
              <p className="text-sm text-herbal-300 uppercase tracking-widest font-semibold">{selectedIngredient.hindiName}</p>
            </div>
            
            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              <p className="text-herbal-100 text-lg leading-relaxed text-center font-light">
                {selectedIngredient.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IngredientSpotlight;
