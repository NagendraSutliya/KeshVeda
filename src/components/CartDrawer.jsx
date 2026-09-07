import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const SHIPPING_THRESHOLD = 499;
  const shippingCost = cartTotal > 0 && cartTotal < SHIPPING_THRESHOLD ? 50 : 0;
  const progressPercent = Math.min((cartTotal / SHIPPING_THRESHOLD) * 100, 100);
  
  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'KESHVEDA10') {
      setDiscount(cartTotal * 0.10);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const finalTotal = cartTotal + shippingCost - discount;

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[60] flex justify-end">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        ></div>

        {/* Drawer */}
        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl h-[calc(100%-2rem)] m-4 rounded-3xl shadow-[0_20px_50px_rgba(27,59,43,0.2)] flex flex-col transform transition-transform duration-300 animate-slide-in-right z-10 border border-stone-200/50 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200/50 bg-herbal-50/50">
            <h2 className="font-serif font-bold text-2xl text-herbal-900 flex items-center">
              <ShoppingBag className="mr-3" size={24} /> Your Cart ({cart.length})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 bg-white hover:bg-stone-100 rounded-full transition-colors text-stone-500 shadow-sm border border-stone-200/50"
            >
              <X size={20} />
            </button>
          </div>

          {/* Shipping Progress */}
          {cartTotal > 0 && (
            <div className="p-4 bg-cream-50 border-b border-stone-100">
              <p className="text-xs font-semibold text-center mb-2 text-stone-700">
                {cartTotal >= SHIPPING_THRESHOLD 
                  ? "🎉 You've unlocked FREE Shipping!" 
                  : `Add ₹${SHIPPING_THRESHOLD - cartTotal} more for FREE Shipping`}
              </p>
              <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-herbal-600 h-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-6">
                <div className="w-24 h-24 bg-herbal-50 rounded-full flex items-center justify-center">
                  <ShoppingBag size={48} className="text-herbal-300" />
                </div>
                <div className="text-center">
                  <p className="font-serif font-bold text-xl text-stone-800 mb-2">Your cart is empty</p>
                  <p className="text-sm">Time to fill it with Ayurvedic goodness.</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="px-8 py-3 bg-herbal-900 hover:bg-herbal-800 text-white rounded-full font-bold shadow-lg transform transition-transform hover:-translate-y-1"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4 bg-white border border-stone-100 p-3 rounded-xl shadow-sm">
                  <div className="w-20 h-20 bg-cream-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-stone-800 line-clamp-2 pr-4">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-herbal-700 font-bold mt-1">₹{item.price}</div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-stone-50 hover:bg-stone-100 text-stone-600 transition-colors"
                        >-</button>
                        <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-stone-50 hover:bg-stone-100 text-stone-600 transition-colors"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-stone-200/50 p-6 bg-white/80">
              <div className="flex space-x-2 mb-6">
                <input 
                  type="text" 
                  placeholder="Promo code (Try KESHVEDA10)" 
                  className="flex-1 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ayurGold-500 focus:ring-1 focus:ring-ayurGold-500 bg-stone-50"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button 
                  onClick={handleApplyPromo}
                  className="bg-stone-800 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-stone-900 transition-colors shadow-sm"
                >
                  Apply
                </button>
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className="font-medium">{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-herbal-600">
                    <span>Discount</span>
                    <span className="font-medium font-bold">-₹{discount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-serif font-bold text-stone-900 pt-4 border-t border-stone-200/50">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(0)}</span>
                </div>
              </div>

              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full bg-herbal-900 hover:bg-herbal-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(27,59,43,0.25)] hover:shadow-[0_10px_25px_rgba(27,59,43,0.35)] hover:-translate-y-1"
              >
                Proceed to Checkout <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal 
          isOpen={showCheckout} 
          onClose={() => setShowCheckout(false)} 
          total={finalTotal}
          discount={discount}
          shipping={shippingCost}
        />
      )}
    </>
  );
};

export default CartDrawer;
