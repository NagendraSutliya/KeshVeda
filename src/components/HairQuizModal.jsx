import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const HairQuizModal = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ type: '', concern: '', scalp: '' });

  if (!isOpen) return null;

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    if (step < 3) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => setStep(4), 400);
    }
  };

  const getRecommendation = () => {
    // Basic logic to recommend combo or specific product based on answers
    return products.find(p => p.category === 'Combos') || products[0];
  };

  const recommendedProduct = getRecommendation();

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-herbal-900 mb-6 text-center">What is your natural hair type?</h3>
            {['Straight', 'Wavy', 'Curly', 'Coily'].map(type => (
              <button
                key={type}
                onClick={() => handleSelect('type', type)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                  answers.type === type ? 'border-herbal-600 bg-herbal-50' : 'border-stone-200 hover:border-herbal-300'
                }`}
              >
                <span className="font-medium text-stone-700">{type}</span>
                {answers.type === type && <CheckCircle2 className="text-herbal-600" size={20} />}
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-herbal-900 mb-6 text-center">What is your primary hair concern?</h3>
            {['Hair Fall', 'Dandruff', 'Dryness & Frizz', 'Thinning & Volume'].map(concern => (
              <button
                key={concern}
                onClick={() => handleSelect('concern', concern)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                  answers.concern === concern ? 'border-herbal-600 bg-herbal-50' : 'border-stone-200 hover:border-herbal-300'
                }`}
              >
                <span className="font-medium text-stone-700">{concern}</span>
                {answers.concern === concern && <CheckCircle2 className="text-herbal-600" size={20} />}
              </button>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-herbal-900 mb-6 text-center">How does your scalp usually feel?</h3>
            {['Oily', 'Normal', 'Dry', 'Sensitive/Itchy'].map(scalp => (
              <button
                key={scalp}
                onClick={() => handleSelect('scalp', scalp)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                  answers.scalp === scalp ? 'border-herbal-600 bg-herbal-50' : 'border-stone-200 hover:border-herbal-300'
                }`}
              >
                <span className="font-medium text-stone-700">{scalp}</span>
                {answers.scalp === scalp && <CheckCircle2 className="text-herbal-600" size={20} />}
              </button>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-3 bg-ayurGold-100 rounded-full mb-4">
              <Sparkles className="text-ayurGold-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-herbal-900 mb-2">Your Ayurvedic Prescription</h3>
            <p className="text-stone-500 mb-8 max-w-sm mx-auto text-sm">
              Based on your {answers.type.toLowerCase()} hair and concern for {answers.concern.toLowerCase()}, we recommend this 100% natural routine.
            </p>
            
            <div className="bg-white border border-stone-200 rounded-2xl p-4 flex flex-col items-center mb-6 shadow-sm">
              <img src={recommendedProduct.image} alt={recommendedProduct.name} className="w-32 h-32 object-contain mb-4" />
              <h4 className="font-bold text-stone-800 mb-1">{recommendedProduct.name}</h4>
              <p className="text-ayurGold-600 font-bold mb-4">₹{recommendedProduct.price}</p>
              
              <button 
                onClick={() => {
                  addToCart(recommendedProduct);
                  onClose();
                  setStep(1);
                  setAnswers({ type: '', concern: '', scalp: '' });
                }}
                className="w-full bg-herbal-900 hover:bg-herbal-800 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center"
              >
                Add Routine to Cart <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-cream-50 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-200/60 bg-white">
          <div className="flex items-center space-x-2">
            <span className="bg-herbal-100 text-herbal-800 text-xs font-bold px-2 py-1 rounded-md">
              Step {Math.min(step, 3)} of 3
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-1 bg-stone-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Progress bar */}
        {step < 4 && (
          <div className="w-full bg-stone-100 h-1.5">
            <div 
              className="bg-herbal-600 h-1.5 transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default HairQuizModal;
