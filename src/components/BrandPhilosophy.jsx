import React from 'react';
import { Sparkles, Droplet, Sprout } from 'lucide-react';

const BrandPhilosophy = () => {
  return (
    <section className="py-20 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-ayurGold-600 font-bold tracking-widest uppercase text-sm mb-3 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-herbal-900 mb-6 max-w-3xl mx-auto leading-tight">
            We Don't Just Mask Hair Problems. <br className="hidden md:block"/> We Heal Them From The Roots.
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern hair care relies on silicones and harsh chemicals for temporary shine. At KeshVeda, we rely on the 5000-year-old science of Ayurveda to nourish your scalp, balance your doshas, and promote true, lasting hair health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-colors border border-stone-100">
            <div className="w-16 h-16 bg-herbal-100 rounded-full flex items-center justify-center mb-6 text-herbal-700">
              <Sprout size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">100% Pure & Unadulterated</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We source more than 25+ rare jadi-booties directly from organic farms. No synthetic fragrances, no parabens, and absolutely zero sulphates. Just the raw power of nature.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-colors border border-stone-100">
            <div className="w-16 h-16 bg-ayurGold-100 rounded-full flex items-center justify-center mb-6 text-ayurGold-700">
              <Droplet size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Kshir Pak Vidhi</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our oils are prepared using the ancient Kshir Pak Vidhi technique—slow-cooked in pure milk for over 24 hours to extract the maximum potency of every herb.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-colors border border-stone-100">
            <div className="w-16 h-16 bg-herbal-100 rounded-full flex items-center justify-center mb-6 text-herbal-700">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Root-Cause Focus</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Hair fall isn't just a surface issue. By targeting scalp health and internal nutrition (via our Plant Protein), we address the root cause of hair thinning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandPhilosophy;
