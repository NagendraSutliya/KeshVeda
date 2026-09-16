import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Plus, ChevronLeft, ChevronRight, User } from 'lucide-react';
import ReviewModal from './ReviewModal';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  // Fetch reviews on mount
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/reviews`)
      .then(res => res.json())
      .then(data => {
        // Sort to show newest first, assuming higher ID means newer
        const sortedData = data.sort((a, b) => b.id - a.id);
        setReviews(sortedData);
      })
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  // Auto-scroll logic for marquee effect
  useEffect(() => {
    let intervalId;
    if (!isHovered && scrollRef.current) {
      intervalId = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1; // Adjust speed by changing this value
        }
      }, 30); // 30ms for smooth continuous scrolling
    }
    return () => clearInterval(intervalId);
  }, [isHovered, reviews]);

  const handleAddReview = async (newReview) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });
      const savedReview = await response.json();
      
      // Add the new review to the beginning of the list
      setReviews([savedReview, ...reviews]);
    } catch (err) {
      console.error("Error posting review:", err);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const averageRating = reviews.length ? (reviews.reduce((acc, curr) => acc + (curr.rating || 5), 0) / reviews.length).toFixed(1) : 0;
  const totalReviews = reviews.length;
  const ratingText = averageRating >= 4.5 ? 'Excellent' : averageRating >= 4.0 ? 'Very Good' : 'Good';

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative flex flex-col">
        <div className="text-center mb-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Real Results, Real People</h2>
          <p className="text-stone-600 mb-4">Join 50,000+ Indians who have transformed their hair naturally.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          {reviews.length > 0 && (
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center text-3xl font-bold text-stone-900">
                  {averageRating} <Star className="ml-1.5 fill-green-700 text-green-700" size={26} />
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium">
                  {ratingText}
                </span>
              </div>
              <p className="text-sm text-stone-500 flex flex-wrap justify-center sm:justify-start items-center gap-x-1">
                <span>based on {totalReviews} ratings by</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-0.5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Buyers
                </span>
              </p>
            </div>
          )}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center w-full sm:w-auto gap-2 bg-herbal-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-herbal-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Plus size={20} />
            Write a Review
          </button>
        </div>
      </div>

      <div 
        className="w-full relative group py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fading edges for marquee effect */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Fixed Navigation Buttons on the Sides */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-stone-800 hover:bg-stone-100 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg text-stone-800 hover:bg-stone-100 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto hide-scrollbar px-4 md:px-8 space-x-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* We duplicate the array to allow for a longer continuous scroll effect */}
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="bg-cream-50 p-8 rounded-2xl border border-stone-100 relative w-[320px] md:w-[400px] flex-shrink-0 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-6 text-stone-200" size={40} />
              
              <div className="flex text-ayurGold-500 mb-4">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-ayurGold-500" />
                ))}
              </div>
              
              <p className="text-stone-700 italic mb-6 leading-relaxed relative z-10 flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center mt-auto">
                {review.image ? (
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm object-cover flex-shrink-0" />
                ) : (
                  <div className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-400">
                    <User size={24} />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-stone-500">{review.location} • Verified Buyer</p>
                  <p className="text-xs text-herbal-600 font-semibold mt-0.5 truncate max-w-[200px]">Used: {review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddReview} 
      />
    </section>
  );
};

export default Testimonials;
