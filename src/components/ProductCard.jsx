import React from 'react';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-cream-50 overflow-hidden flex items-center justify-center p-6 cursor-pointer" onClick={() => onQuickView(product)}>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2 z-10">
          {product.badge && (
            <span className="bg-ayurGold-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-herbal-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm w-fit">
              {discount}% OFF
            </span>
          )}
        </div>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick View Button - overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="bg-white text-stone-800 hover:text-herbal-700 font-medium px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center"
          >
            <Eye size={16} className="mr-2" /> Quick View
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-2">
          {product.category}
        </div>
        
        <h3 
          className="font-serif font-bold text-lg text-stone-800 mb-2 line-clamp-2 cursor-pointer hover:text-herbal-700 transition-colors"
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <div className="flex text-ayurGold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-ayurGold-400' : ''} />
            ))}
          </div>
          <span className="text-xs text-stone-500">({product.reviews})</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-herbal-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-stone-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full bg-herbal-50 text-herbal-700 flex items-center justify-center hover:bg-herbal-900 hover:text-white transition-colors duration-300"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
