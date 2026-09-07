import React from 'react';
import { X, Star, ShoppingBag, Truck, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform transition-all animate-fade-in-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-stone-400 hover:text-stone-800 bg-white/80 p-2 rounded-full shadow-sm backdrop-blur-sm transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-cream-50 p-8 flex items-center justify-center border-r border-stone-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-[250px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="text-xs text-ayurGold-600 uppercase tracking-widest font-bold mb-2">
            {product.category}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-herbal-900 mb-2">
            {product.name}
          </h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex text-ayurGold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-ayurGold-500' : ''} />
              ))}
            </div>
            <span className="text-sm text-stone-500 underline cursor-pointer">{product.reviews} Reviews</span>
          </div>
          
          <div className="flex items-baseline space-x-3 mb-6">
            <span className="text-3xl font-bold text-herbal-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-lg text-stone-400 line-through">₹{product.originalPrice}</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                  SAVE ₹{product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          <p className="text-stone-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8 space-y-2">
            <h4 className="font-bold text-stone-800 text-sm mb-3">Key Benefits:</h4>
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-stone-600">
                <Check size={16} className="text-herbal-500 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col space-y-3">
            <button 
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full bg-herbal-900 hover:bg-herbal-800 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-[0_4px_14px_rgba(27,59,43,0.3)] hover:shadow-[0_6px_20px_rgba(27,59,43,0.4)] hover:-translate-y-0.5"
            >
              <ShoppingBag size={20} className="mr-2" />
              Add to Cart - ₹{product.price}
            </button>
            
            <div className="flex justify-between items-center pt-4 border-t border-stone-100">
              <div className="flex items-center text-xs text-stone-500">
                <Truck size={14} className="mr-1.5" /> Fast Delivery
              </div>
              <div className="flex items-center text-xs text-stone-500">
                <ShieldCheck size={14} className="mr-1.5" /> Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
