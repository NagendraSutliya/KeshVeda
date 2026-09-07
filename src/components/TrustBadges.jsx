import React from 'react';
import { ShieldCheck, HeartPulse, Droplets, LeafyGreen } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { icon: <ShieldCheck size={32} />, title: "AYUSH Certified", desc: "Govt. approved formulations" },
    { icon: <LeafyGreen size={32} />, title: "100% Natural", desc: "Pure Ayurvedic botanicals" },
    { icon: <Droplets size={32} />, title: "Toxin Free", desc: "No Parabens or Sulphates" },
    { icon: <HeartPulse size={32} />, title: "Cruelty Free", desc: "Never tested on animals" },
  ];

  return (
    <div className="bg-cream-200 py-10 border-y border-herbal-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              <div className="text-herbal-700 mb-3 bg-herbal-100 p-4 rounded-full group-hover:bg-ayurGold-200 group-hover:text-herbal-900 transition-colors duration-300">
                {badge.icon}
              </div>
              <h3 className="text-stone-800 font-bold text-sm lg:text-base mb-1">{badge.title}</h3>
              <p className="text-stone-500 text-xs lg:text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
