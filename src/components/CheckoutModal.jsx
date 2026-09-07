import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose, total, discount, shipping }) => {
  const { cart, setIsCartOpen } = useCart();
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format cart items
    const itemsList = cart.map(item => `${item.quantity}x ${item.name}`).join('\n');

    // Format message
    const message = `*New Order from KeshVeda* 🌿

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

*Order Details:*
${itemsList}

*Total Amount:* ₹${total.toFixed(0)} (including shipping/discounts)

Please confirm my order.`;

    // Owner WhatsApp number
    const ownerNumber = '919351682348';

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setStep(2);
  };

  const handleFinish = () => {
    onClose();
    setIsCartOpen(false);
    // In real app, clear cart here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {step === 1 ? (
          <>
            <div className="flex justify-between items-center p-4 border-b border-stone-200 bg-cream-50">
              <h2 className="font-serif font-bold text-xl text-herbal-900">Secure Checkout</h2>
              <button onClick={onClose} className="text-stone-400 hover:text-stone-800">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">Full Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-herbal-500 focus:ring-1 focus:ring-herbal-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">Mobile Number (For Delivery)</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-herbal-500 focus:ring-1 focus:ring-herbal-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">Full Address with Pincode</label>
                  <textarea required rows="3" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-herbal-500 focus:ring-1 focus:ring-herbal-500"></textarea>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl mb-6 border border-stone-200">
                <h4 className="font-bold text-sm mb-2">Order Summary</h4>
                <div className="flex justify-between text-sm mb-1 text-stone-600">
                  <span>Items ({cart.length})</span>
                  <span>₹{total - shipping + discount}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm mb-1 text-herbal-600">
                    <span>Promo Discount</span>
                    <span>-₹{discount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm mb-3 text-stone-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-stone-200 pt-2">
                  <span>Amount to Pay</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors">
                <ShieldCheck size={20} className="mr-2" /> Order via WhatsApp - ₹{total.toFixed(0)}
              </button>
            </form>
          </>
        ) : (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-herbal-900 mb-2">Order Initiated!</h2>
            <p className="text-stone-600 mb-8 max-w-sm">
              Your order details have been sent via WhatsApp. We will confirm your order and dispatch it shortly.
            </p>
            <button
              onClick={handleFinish}
              className="px-8 py-3 bg-herbal-900 hover:bg-herbal-800 text-white rounded-full font-bold transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
