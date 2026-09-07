import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { products } from '../data/products';

const ProductCatalog = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Hair Oils', 'Shampoos', 'Protein Powders', 'Combos'];

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="shop" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-herbal-900 mb-4">Shop Ayurvedic Solutions</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">100% natural formulations tailored for Indian hair concerns. Clinically tested, visibly effective.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-herbal-900 text-white shadow-md' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-herbal-300 hover:text-herbal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={setSelectedProduct} 
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductCatalog;
