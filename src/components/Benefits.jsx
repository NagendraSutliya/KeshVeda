import React from 'react';
import { ShieldCheck, Droplets, Sprout, Sparkles } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Stops Hair Fall",
    description: "Strengthens hair from the roots, significantly reducing breakage and daily hair fall.",
    icon: <ShieldCheck size={32} />
  },
  {
    id: 2,
    title: "Eliminates Dandruff",
    description: "Clears scalp buildup and balances pH levels to banish dandruff naturally and permanently.",
    icon: <Droplets size={32} />
  },
  {
    id: 3,
    title: "Promotes New Growth",
    description: "Stimulates dormant follicles with potent Ayurvedic herbs to encourage thicker, denser hair.",
    icon: <Sprout size={32} />
  },
  {
    id: 4,
    title: "Restores Natural Shine",
    description: "Deeply conditions and repairs damaged shafts for soft, shiny, and frizz-free hair.",
    icon: <Sparkles size={32} />
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-cream-50 relative border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ayurGold-600 font-bold tracking-widest uppercase text-sm mb-3 block">Why Choose KeshVeda?</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Complete Care For Your Hair</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Experience visible results with our clinically proven, 100% natural Ayurvedic formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-herbal-50 rounded-2xl flex items-center justify-center text-herbal-700 mb-6 group-hover:scale-110 group-hover:bg-herbal-100 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
