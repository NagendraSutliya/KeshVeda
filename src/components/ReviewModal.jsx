import React, { useState } from 'react';
import { X, Star } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    product: '',
    text: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      rating
    });
    setFormData({ name: '', location: '', product: '', text: '' });
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        <div className="p-6 bg-cream-50 border-b border-stone-100 flex justify-between items-center">
          <h3 className="text-2xl font-serif font-bold text-stone-900">Write a Review</h3>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Overall Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <Star 
                    size={28} 
                    className={`${(hoverRating || rating) >= star ? 'fill-ayurGold-500 text-ayurGold-500' : 'text-stone-300'}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
              <input 
                required 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-ayurGold-500 focus:border-transparent outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">City/Location</label>
              <input 
                required 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-ayurGold-500 focus:border-transparent outline-none"
                placeholder="Mumbai"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Product Used</label>
            <select 
              required
              value={formData.product}
              onChange={(e) => setFormData({...formData, product: e.target.value})}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-ayurGold-500 focus:border-transparent outline-none"
            >
              <option value="" disabled>Select a product</option>
              <option value="Sarv-Aushadhi Hair Growth Oil">Sarv-Aushadhi Hair Growth Oil</option>
              <option value="Sarv-Aushadhi Clarifying Shampoo">Sarv-Aushadhi Clarifying Shampoo</option>
              <option value="Bio-Active Plant Protein Powder">Bio-Active Plant Protein Powder</option>
              <option value="Ultimate Hair Rejuvenation Kit">Ultimate Hair Rejuvenation Kit</option>
              <option value="Ubtan & Haldi Radiant Face Pack">Ubtan & Haldi Radiant Face Pack</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Your Review</label>
            <textarea 
              required 
              rows="4" 
              value={formData.text}
              onChange={(e) => setFormData({...formData, text: e.target.value})}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-ayurGold-500 focus:border-transparent outline-none resize-none"
              placeholder="Tell us about your experience..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-herbal-800 text-white font-semibold py-3 rounded-xl hover:bg-herbal-900 transition-colors mt-4"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
