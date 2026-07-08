import { Lock, ChevronDown } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-24 text-[#222222]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* LEFT COLUMN: Billing & Shipping */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-neutral-900">
                Billing details
              </h2>
              
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-800">
                    পূর্ণ নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Aiko"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-800">
                    মোবাইল নাম্বার <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    defaultValue="01719277951"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-800">
                    প্রবাস থেকে অর্ডার করতে হোয়াটসঅ্যাপ নাম্বার লিখুন
                  </label>
                  <input
                    type="text"
                    placeholder="হোয়াটসঅ্যাপ নাম্বার লিখুন"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-neutral-500 transition-colors placeholder-neutral-400"
                  />
                </div>

                {/* District Dropdown */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-800">
                    জেলা (optional)
                  </label>
                  <div className="relative">
                    <select
                      defaultValue="Sherpur"
                      className="w-full appearance-none rounded-md border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-neutral-500 transition-colors bg-white pr-10 text-neutral-700"
                    >
                      <option value="Sherpur">Sherpur</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-neutral-800">
                    পূর্ণ ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="332 South Green Fabien Extension"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Section */}
            <div className="pt-4">
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-neutral-900">
                Shipping
              </h2>
              <div className="flex justify-between items-center w-full rounded-md border border-neutral-200 p-4 text-base font-medium text-neutral-800 bg-neutral-50/30">
                <span>ডেলিভারি চার্জ:</span>
                <span>130.00৳</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Your Order Details */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-neutral-900">
              Your order
            </h2>

            <div className="border border-neutral-100 rounded-lg p-1">
              {/* Product Table Header */}
              <div className="flex justify-between text-base font-bold pb-3 border-b border-dashed border-neutral-200 px-2">
                <span className="text-neutral-600">Product</span>
                <span className="text-neutral-600">Subtotal</span>
              </div>

              {/* Product Item Row */}
              <div className="py-4 border-b border-dashed border-neutral-200 px-2">
                <div className="flex items-start gap-3">
                  {/* Product Image Placeholder */}
                  <div className="h-16 w-16 flex-shrink-0 bg-neutral-100 rounded overflow-hidden border border-neutral-200 flex items-center justify-center relative">
                    <span className="text-xs text-neutral-400">Image</span>
                  </div>
                  
                  {/* Product Details & Internal Pricing Breakdown */}
                  <div className="flex-1 flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-neutral-800 leading-tight">
                        সুপার প্রিমিয়াম সুক্কারি রুতাব- ৩ কেজি
                      </p>
                      <p className="text-xs text-neutral-500 font-semibold">1</p>
                    </div>
                    
                    <div className="text-right flex items-center gap-4">
                      <div className="text-sm text-right">
                        <span className="block text-neutral-400 line-through text-xs">3,600.00৳</span>
                        <span className="block bg-yellow-100 px-1 font-medium rounded text-neutral-800">3,300.00৳</span>
                      </div>
                      <span className="text-base font-medium text-neutral-800 self-center">
                        3,300.00৳
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Rows */}
              <div className="space-y-3 py-4 border-b border-dashed border-neutral-200 px-2 text-base">
                <div className="flex justify-between items-start">
                  <span className="text-neutral-800 font-medium">Subtotal</span>
                  <div className="text-right">
                    <span className="block font-medium text-neutral-800">3,300.00৳</span>
                    <span className="block text-xs text-neutral-500 font-medium mt-0.5">Save: 300.00৳</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 px-2 text-lg font-bold text-neutral-900">
                <span>Total</span>
                <span>3,430.00৳</span>
              </div>

              {/* Payment Methods Section */}
              <div className="mt-4 bg-[#f9f9f9] rounded-md p-4 space-y-4">
                {/* Cash on Delivery */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer text-base font-semibold text-neutral-800">
                    <input
                      type="radio"
                      name="payment_method"
                      defaultChecked
                      className="h-4 w-4 accent-orange-600 border-neutral-300 text-orange-600 focus:ring-0"
                    />
                    <span>ক্যাশ অন ডেলিভারি</span>
                  </label>
                  
                  {/* Tooltip Description block */}
                  <div className="relative bg-[#e9e9e9] p-3 rounded text-sm text-neutral-700 font-medium ml-7 before:content-[''] before:absolute before:-top-2 before:left-4 before:w-0 before:h-0 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-[#e9e9e9]">
                    পণ্য হাতে পেয়ে ডেলিভারিম্যানকে টাকা বুঝিয়ে দিন।
                  </div>
                </div>

                {/* bKash Payment */}
                <div className="flex justify-between items-center pt-2">
                  <label className="flex items-center gap-3 cursor-pointer text-base font-semibold text-neutral-800">
                    <input
                      type="radio"
                      name="payment_method"
                      className="h-4 w-4 accent-orange-600 border-neutral-300 text-orange-600 focus:ring-0"
                    />
                    <span>bKash Payment Gateway</span>
                  </label>
                  {/* Mini bKash Logo Placeholder matching look */}
                  <div className="flex items-center gap-1 font-bold text-[#d12053] italic text-sm">
                    <span>bKash</span>
                    <div className="w-4 h-4 bg-[#d12053] transform rotate-45 origin-center clip-path-logo inline-block ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full mt-4 bg-[#008000] hover:bg-[#006e00] text-white font-bold py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2 text-base shadow-sm">
                <Lock className="h-4 w-4 fill-current" />
                <span>Place Order  3,430.00৳</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}