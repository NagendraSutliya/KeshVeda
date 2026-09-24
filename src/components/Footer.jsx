import React, { useState, useEffect } from 'react';
import { Leaf, Instagram, Facebook, Twitter, Users } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Fetch the current count, increment it, and save it back to the database
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/stats/visitors`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        const currentCount = data.count !== undefined ? data.count : 0;
        const newCount = currentCount + 1;
        
        // Send the updated count to the server
        fetch(`${API_URL}/api/stats/visitors`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ count: newCount })
        })
        .then(res => {
          if (!res.ok) throw new Error('Failed to update');
          setVisitorCount(newCount);
        })
        .catch(err => {
          console.error("Failed to update visitor count:", err);
          setVisitorCount(currentCount);
        });
      })
      .catch(err => {
        console.error("Error fetching stats:", err);
        setVisitorCount(null); // Keep as null on error
      });
  }, []);
  return (
    <footer className="bg-herbal-950 text-herbal-100/70 pt-16 pb-8 border-t border-herbal-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Leaf className="text-ayurGold-500 mr-2" size={28} />
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                Kesh<span className="text-ayurGold-500">Veda</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Reviving ancient Ayurvedic wisdom for modern hair wellness. 100% natural, cruelty-free, and ethically sourced ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-herbal-300 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-herbal-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-herbal-300 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Hair Oils</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Herbal Shampoos</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Protein Powders</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Combos & Gifts</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Help & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-ayurGold-400 transition-colors">Hair Care Quiz</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Join Our Tribe</h4>
            <p className="text-sm mb-4">Subscribe to get 10% off your first order and Ayurvedic hair care tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-herbal-900 border border-herbal-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-ayurGold-500 w-full text-sm"
              />
              <button 
                type="submit" 
                className="bg-ayurGold-600 hover:bg-ayurGold-500 text-herbal-950 font-bold px-4 py-2 rounded-r-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-herbal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-5 md:gap-0">
          <div className="order-1 md:order-2 flex items-center space-x-2 bg-herbal-900/50 px-3 py-1.5 rounded-full border border-herbal-800 mb-2 md:mb-0">
            <Users size={14} className="text-ayurGold-500" />
            <span className="text-herbal-300 font-medium">Total Visitors:</span>
            <span className="text-white font-bold">{visitorCount !== null ? visitorCount.toLocaleString() : "Loading..."}</span>
          </div>

          <p className="order-2 md:order-1 text-center md:text-left text-herbal-100/70">
            © 2026 KeshVeda Ayurvedic Wellness. All rights reserved.
          </p>
          
          <div className="order-3 flex space-x-4 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
