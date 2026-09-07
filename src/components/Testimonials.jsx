import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      product: "Bhringraj Oil + Shampoo",
      rating: 5,
      text: "I was suffering from severe postpartum hair fall. After using KeshVeda for 45 days, my hair fall has reduced by 80% and I can see new baby hairs growing!",
      image: "https://i.pravatar.cc/150?img=43"
    },
    {
      name: "Rohan Desai",
      location: "Bangalore",
      product: "Plant Protein Powder",
      rating: 5,
      text: "Adding the Ayurvedic Protein Powder to my daily smoothie completely changed my hair texture. It's much thicker now and doesn't break easily.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Ananya Patel",
      location: "Ahmedabad",
      product: "Ultimate Rejuvenation Kit",
      rating: 5,
      text: "The smell is pure herbs, no artificial perfumes. My dandruff is completely gone after using the Shikakai shampoo just 3 times. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=47"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Real Results, Real People</h2>
          <p className="text-stone-600">Join 50,000+ Indians who have transformed their hair naturally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cream-50 p-8 rounded-2xl border border-stone-100 relative">
              <Quote className="absolute top-6 right-6 text-stone-200" size={40} />
              
              <div className="flex text-ayurGold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-ayurGold-500" />
                ))}
              </div>
              
              <p className="text-stone-700 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-stone-500">{review.location} • Verified Buyer</p>
                  <p className="text-xs text-herbal-600 font-semibold mt-0.5">Used: {review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
