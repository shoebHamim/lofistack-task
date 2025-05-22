import React, { useState } from 'react'
import toast from 'react-hot-toast';

const OrderSummary = ({ subtotal, tax, total, applyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode);
    if (result) { 
      setCouponApplied(true);
      toast.success('Coupon applied!',{position:'bottom-center'});
    } else {
      setCouponApplied(false);
      toast.error('Invalid coupon code',{position:'bottom-center'});
    }
    setCouponCode('');
    setShowCouponInput(false);
  };

  return (
    <div className="lg:w-2/5 self-end">
      <div className="flex flex-col rounded-lg">

        <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
          <span className='font-medium'>Subtotal:</span>
          <span className="font-medium text-gray-500">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4 pb-4 border-b border-gray-300">
          <span className='font-medium'>Sales Tax:</span>
          <span className="font-medium text-gray-500">${tax.toFixed(2)}</span>
        </div>

        {total !== subtotal + tax && (
          <div className="flex justify-between mb-4 pb-4 border-b text-green-600">
            <span>Discount:</span>
            <span className="font-medium text-gray-500">-${(subtotal + tax - total).toFixed(2)}</span>
          </div>
        )}

        <div className="mb-6 pb-4 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <span className="font-medium">Coupon Code:</span>
            {!showCouponInput && !couponApplied && (
              <button
                onClick={() => setShowCouponInput(true)}
                className="text-gray-500 underline hover:text-gray-600"
              >
                Add Coupon
              </button>
            )}
            {couponApplied && couponCode == 'LOFI10' && (
              <span className="text-green-600 text-sm">Coupon applied!</span>
            )}
          </div>

          {showCouponInput && (
            <div className="mt-3">
              <div className="flex">
                <input
                  type="text"
                  id="coupon"
                  className="border rounded-l-md py-2 px-3 flex-1"
                  placeholder="Enter coupon code: LOFI10"
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
              {couponApplied && couponCode !== 'LOFI10' && (
                <p className="mt-2 text-sm text-red-600">Invalid coupon code</p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mb-6">
          <span className='font-medium'>Grand total:</span>
          <span className='text-2xl'>${total.toFixed(2)}</span>
        </div>

        <div className="mb-4 w-3/4 self-end">
          <div className="flex items-center gap-4 ">
            <div>
              Congrats, you're eligible for <strong>Free shipping</strong>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>

          </div>
          <div className="w-full h-1 mt-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-lime-400 via-green-400 to-green-500"></div>
          </div>
        </div>
        <button className="w-3/4 bg-black text-white py-3 text-lg font-medium cursor-pointer self-end">
          Check out
        </button>

      </div>
    </div>
  )
}

export default OrderSummary