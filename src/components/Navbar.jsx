import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-herbal-900 text-ayurGold-200 text-center text-xs sm:text-sm py-2 px-4 tracking-wide font-medium">
        🌿 Free Shipping on orders over ₹499 | Use Code: <span className="font-bold text-white">KESHVEDA10</span> for 10% Off
      </div>
      
      <nav className="sticky top-0 z-40 glass-card border-b border-herbal-200/30 w-full transition-all duration-300 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-herbal-900 hover:text-herbal-600 transition-colors p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none cursor-pointer">
              <Leaf className="text-herbal-600 mr-2" size={28} />
              <span className="font-serif text-2xl md:text-3xl font-bold text-herbal-900 tracking-tight">
                Kesh<span className="text-ayurGold-600">Veda</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
              <a href="#shop" className="text-stone-700 hover:text-herbal-700 font-medium text-sm uppercase tracking-wider transition-colors hover:-translate-y-0.5 duration-200">Shop</a>
              <a href="#quiz" className="text-stone-700 hover:text-herbal-700 font-medium text-sm uppercase tracking-wider transition-colors hover:-translate-y-0.5 duration-200 relative">
                Hair Quiz
                <span className="absolute -top-3 -right-6 bg-ayurGold-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
              </a>
              <a href="#ingredients" className="text-stone-700 hover:text-herbal-700 font-medium text-sm uppercase tracking-wider transition-colors hover:-translate-y-0.5 duration-200">Ingredients</a>
              <a href="#reviews" className="text-stone-700 hover:text-herbal-700 font-medium text-sm uppercase tracking-wider transition-colors hover:-translate-y-0.5 duration-200">Reviews</a>
            </div>

            {/* Icons Right */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="text-herbal-900 hover:text-herbal-600 transition-colors p-1 hidden sm:block">
                <Search size={22} />
              </button>
              
              <button 
                className="text-herbal-900 hover:text-herbal-600 transition-colors p-1 relative group"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={24} className="group-hover:scale-110 transition-transform duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-ayurGold-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200/50 absolute top-full left-0 w-full shadow-lg z-50">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#shop" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-herbal-700 hover:bg-stone-50 rounded-md">Shop</a>
              <a href="#quiz" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-herbal-700 hover:bg-stone-50 rounded-md flex items-center justify-between">
                Hair Quiz
                <span className="bg-ayurGold-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
              </a>
              <a href="#ingredients" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-herbal-700 hover:bg-stone-50 rounded-md">Ingredients</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-herbal-700 hover:bg-stone-50 rounded-md">Reviews</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
