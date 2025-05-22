import React, { useState } from 'react'

const OrderSummary = ({ subtotal, tax, total, applyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
    setCouponApplied(true);
  };

  return (
    <div className="lg:w-1/3 self-end">
      <div className="bg-gray-50 rounded-lg">

        <div className="flex justify-between mb-4 pb-4 border-b">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4 pb-4 border-b">
          <span>Sales Tax:</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        {total !== subtotal + tax && (
          <div className="flex justify-between mb-4 pb-4 border-b text-green-600">
            <span>Discount:</span>
            <span className="font-medium">-${(subtotal + tax - total).toFixed(2)}</span>
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="coupon" className="block mb-2 text-gray-600">Coupon Code:</label>
          <div className="flex">
            <input
              type="text"
              id="coupon"
              className="border rounded-l-md py-2 px-3 flex-1"
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-r-md hover:bg-gray-300"
            >
              Apply
            </button>
          </div>
          {couponApplied && couponCode === 'LOFI10' && (
            <p className="mt-2 text-sm text-green-600">Coupon applied! 10% discount</p>
          )}
          {couponApplied && couponCode !== 'LOFI10' && (
            <p className="mt-2 text-sm text-red-600">Invalid coupon code</p>
          )}
        </div>

        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Grand total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              Congrats, you're eligible for <strong>Free shipping</strong>
            </span>
          </div>
          <div className="w-full h-1 mt-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-full"></div>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition">
          Check out
        </button>
      </div>
    </div>
  )
}

export default OrderSummary