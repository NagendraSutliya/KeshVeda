import React from 'react';
import { ArrowRight, Star, Leaf } from 'lucide-react';

const Hero = ({ onOpenQuiz }) => {
  return (
    <div className="relative bg-herbal-900 text-cream-50 overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[100%] rounded-full bg-herbal-700 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[80%] rounded-full bg-ayurGold-900 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-herbal-800/50 border border-herbal-600/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Star size={14} className="text-ayurGold-400 fill-ayurGold-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-ayurGold-200">Trusted by 50,000+ Indians</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Ancient Wisdom for <span className="text-ayurGold-400 italic">Modern</span> Hair Health
            </h1>
            
            <p className="text-lg md:text-xl text-herbal-100 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the power of 100% pure Ayurvedic botanicals. Clinically proven solutions for hair fall, thinning, and total scalp rejuvenation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
              <a 
                href="#shop" 
                className="w-full sm:w-auto bg-ayurGold-500 hover:bg-ayurGold-400 text-herbal-950 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(212,163,115,0.3)] flex items-center justify-center group"
              >
                Shop Hair Care
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={onOpenQuiz}
                className="w-full sm:w-auto bg-transparent border-2 border-herbal-400 hover:border-ayurGold-400 text-cream-50 hover:text-ayurGold-200 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                Take Hair Quiz
              </button>
            </div>
          </div>

          {/* Hero Image / Composition */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Stylized background circle */}
            <div className="absolute inset-0 bg-ayurGold-500/10 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] m-auto animate-pulse"></div>
            
            <div className="relative z-10 transform lg:scale-110 lg:translate-x-10">
              <img 
                src="/images/combo.png" 
                alt="KeshVeda Premium Ayurvedic Combo Set" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl"
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 glass-dark p-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-[bounce_4s_infinite]">
                <div className="bg-ayurGold-500/20 p-2 rounded-lg">
                  <Leaf className="text-ayurGold-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-herbal-200 uppercase tracking-wider font-semibold">Certified</p>
                  <p className="text-sm text-white font-bold">100% Ayurvedic</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
