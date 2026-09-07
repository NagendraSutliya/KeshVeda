import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Because our products are 100% natural and work on the root cause, visible results typically appear within 4 to 6 weeks of consistent use. Severe hair fall may take up to 3 months to fully resolve."
    },
    {
      q: "Are these products safe for chemically treated or colored hair?",
      a: "Yes! In fact, our sulphate-free shampoos and natural oils are highly recommended for chemically treated hair as they help restore lost moisture and repair damage without stripping color."
    },
    {
      q: "Can men use KeshVeda products?",
      a: "Absolutely. KeshVeda products are unisex and highly effective for men suffering from early thinning, receding hairlines, or scalp issues."
    },
    {
      q: "What is the difference between Ayurvedic Plant Protein and normal Whey protein?",
      a: "Our Bio-Active Plant Protein is specifically formulated with Ayurvedic herbs like Brahmi and Ashwagandha to boost keratin production for hair, whereas regular whey is primarily for muscle building and can sometimes increase body heat (Pitta) leading to hair fall."
    }
  ];

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-bold text-stone-800">{faq.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="text-herbal-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-stone-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
