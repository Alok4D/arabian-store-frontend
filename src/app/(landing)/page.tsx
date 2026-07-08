'use client';

import Image from 'next/image';
import { Check, CircleDot, Circle } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState('3kg');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const products = [
    { id: '1kg', name: 'সুপার প্রিমিয়াম সুক্কারি রোতাব- ১ কেজি × 1', originalPrice: '1,340.00', salePrice: '1,190.00', tag: null },
    { id: '3kg', name: 'সুপার প্রিমিয়াম সুক্কারি রোতাব- ৩ কেজি × 1', originalPrice: '3,600.00', salePrice: '3,300.00', tag: '৩০০৳ ছাড়' },
    { id: '2kg', name: 'সুপার প্রিমিয়াম সুক্কারি রোতাব- ২ কেজি × 1', originalPrice: '2,500.00', salePrice: '2,290.00', tag: null },
    { id: 'tahina_combo', name: '১ কেজি প্রিমিয়াম সুক্কারি রোতাব ও ৩০০ গ্রাম তাহিনা কম্বো × 1', originalPrice: '2,030.00', salePrice: '1,790.00', tag: null },
    { id: 'gawa_combo', name: '১ কেজি প্রিমিয়াম সুক্কারি রোতাব ও ২৫০ গ্রাম এরাবিয়ান গাওয়া কম্বো × 1', originalPrice: '2,440.00', salePrice: '2,190.00', tag: null },
  ];

  return (
    <main className="min-h-screen bg-[#e8f6ed] font-sans pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-10">
        
        {/* Header Box */}
        <div className="bg-[#eefcf4] border-[1.5px] border-[#d1ebd9] rounded-md py-8 px-4 text-center mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#c07000] mb-4">
            নতুন সিজনের সুপার প্রিমিয়াম সুক্কারি রোতাব
          </h1>
          <p className="text-xl md:text-[26px] font-bold text-[#006666]">
            খেজুরের জগতে সেরা স্বাদ ও মধুময় খেজুর!
          </p>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 items-stretch">
          
          {/* Left Column - Features */}
          <div className="flex-1 space-y-10 lg:pl-10">
            
            {/* Features List 1 */}
            <div>
              <h2 className="text-[26px] font-extrabold text-[#b86b11] mb-6">
                সুক্কারি রোতাব খেজুরের বৈশিষ্ট্য!
              </h2>
              <ul className="space-y-4">
                {[
                  'গাছপাকা ও রসালো খেজুর।',
                  'মধুর মতো মিষ্টি।',
                  'হাতের চাপেই গলে যায়।',
                  'মুখে দিলে মিলিয়ে যায়।',
                  'শিশু ও বৃদ্ধদের জন্য খুবই উপযোগী।',
                  'কাঁচা কাঁচা ফ্লেভার পাওয়া যায়।'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-[18px] h-[18px] shrink-0 bg-[#00a82d] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" strokeWidth={4} />
                    </div>
                    <span className="text-[#111111] font-semibold text-[17px] leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features List 2 */}
            <div>
              <h2 className="text-[26px] font-extrabold text-[#b86b11] mb-6">
                আমাদের রোতাব কেন সেরা?
              </h2>
              <ul className="space-y-4">
                {[
                  'প্রতিটি খেজুর বেছে বেছে প্যাকেজিং করা হয়।',
                  'বড় সাইজ।',
                  'পছন্দ না হলে রিটার্ন গ্যারান্টি।',
                  'প্রিমিয়াম ও মজবুত প্যাকেজিং।',
                  'প্রোডাক্ট দেখে রিসিভ করার সুযোগ।'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-[18px] h-[18px] shrink-0 bg-[#00a82d] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" strokeWidth={4} />
                    </div>
                    <span className="text-[#111111] font-semibold text-[17px] leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Button */}
            <div className="pt-2">
              <button 
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#009420] text-white text-[22px] font-bold py-3 px-14 rounded-md shadow-md transition-transform hover:scale-[1.02] active:scale-95 border-b-4 border-[#007018]"
              >
                অর্ডার করুন
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-[1.2] flex justify-center items-center">
            <div className="relative w-full max-w-[650px] bg-white rounded-sm shadow-sm p-[10px] border border-gray-200">
              <Image 
                src="/sukkari.webp" 
                alt="Sukkari Rutab Image" 
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto mb-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f2fbf4] border border-[#d6eedc] rounded-md py-6 px-4 text-center shadow-sm">
              <p className="text-[22px] font-bold text-[#111] flex items-center justify-center gap-2 flex-wrap">
                ১ কেজি সুপার প্রিমিয়াম সুক্কারি রুতাব <span className="text-red-600 font-extrabold ml-2">১১৯০ টাকা</span>
              </p>
            </div>
            <div className="bg-[#f2fbf4] border border-[#d6eedc] rounded-md py-6 px-4 text-center shadow-sm">
              <p className="text-[22px] font-bold text-[#111] flex items-center justify-center gap-2 flex-wrap">
                ২ কেজি সুপার প্রিমিয়াম সুক্কারি রুতাব <span className="text-red-600 font-extrabold ml-2">২২৯০ টাকা</span>
              </p>
            </div>
          </div>
          
          <div className="bg-[#f2fbf4] border border-[#d6eedc] rounded-md py-10 px-4 text-center shadow-sm">
            <p className="text-3xl md:text-[34px] font-bold text-[#111] flex items-center justify-center gap-4 flex-wrap">
              ৩ কেজি সুপার প্রিমিয়াম সুক্কারি রুতাব <span className="text-red-600 font-extrabold ml-2">৩৩০০ টাকা</span>
            </p>
          </div>
        </div>

        {/* Order Form Section */}
        <div id="order" className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10">
           <div className="flex items-center gap-2 mb-6">
             <div className="w-4 h-4 text-[#ff5722] border-[1.5px] border-[#ff5722] rounded-sm flex items-center justify-center text-[10px]">✔</div>
             <p className="text-gray-600 text-[15px]">
               Returning customer?{' '}
               <button 
                 type="button" 
                 onClick={() => setIsLoginOpen(!isLoginOpen)}
                 className="text-[#ff5722] hover:underline font-medium"
               >
                 Click here to login
               </button>
             </p>
           </div>

           {/* Expandable Login Form */}
           {isLoginOpen && (
             <div className="border border-gray-200 rounded p-6 mb-8 bg-white transition-all">
               <p className="text-[#444] text-[15px] mb-6 font-serif">
                 If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.
               </p>
               <div className="flex flex-col md:flex-row gap-6 mb-5">
                 <div className="flex-1">
                   <label className="block text-[#444] text-sm font-semibold mb-2">Username or email <span className="text-[#ff5722]">*</span></label>
                   <input type="text" className="w-full border border-[#ddd] rounded-sm p-[10px] focus:outline-none focus:border-gray-400" />
                 </div>
                 <div className="flex-1">
                   <label className="block text-[#444] text-sm font-semibold mb-2">Password <span className="text-[#ff5722]">*</span></label>
                   <input type="password" className="w-full border border-[#ddd] rounded-sm p-[10px] focus:outline-none focus:border-gray-400" />
                 </div>
               </div>
               
               <div className="flex items-center gap-2 mb-5">
                 <input type="checkbox" id="remember" className="w-4 h-4 text-[#ff5722] border-[#ddd] rounded-sm cursor-pointer" />
                 <label htmlFor="remember" className="text-[#444] text-[15px] cursor-pointer">Remember me</label>
               </div>
               
               <button type="button" className="w-full bg-[#f26522] hover:bg-[#d85515] text-white font-bold py-3 px-4 rounded-sm transition-colors text-[17px]">
                 Login
               </button>
               
               <div className="text-right mt-4">
                 <a href="#" className="text-[#f26522] text-[15px] hover:underline">Lost your password?</a>
               </div>
             </div>
           )}
           
           <h3 className="text-[22px] font-bold text-gray-800 mb-6">Your Products</h3>
           
           <div className="border border-gray-200 rounded-md mb-10 bg-white">
             {products.map((product, idx) => (
               <div 
                 key={product.id}
                 onClick={() => setSelectedProduct(product.id)}
                 className={`relative flex flex-col md:flex-row items-start md:items-center p-4 cursor-pointer transition-colors border-b border-gray-200 last:border-b-0 ${
                   selectedProduct === product.id ? 'bg-[#fff7f5]' : 'hover:bg-gray-50'
                 }`}
               >
                 {product.tag && (
                   <div className="absolute top-0 right-0 bg-[#ff5722] text-white text-xs font-bold px-3 py-1 rounded-bl-md">
                     {product.tag}
                   </div>
                 )}
                 <div className="flex items-center w-full">
                   <div className="flex-shrink-0 mr-4">
                     {selectedProduct === product.id ? (
                       <CircleDot className="w-[18px] h-[18px] text-[#ff5722]" />
                     ) : (
                       <Circle className="w-[18px] h-[18px] text-gray-300" />
                     )}
                   </div>
                   <div className="flex-shrink-0 mr-4">
                     <div className="w-12 h-12 bg-white rounded p-0.5 border border-gray-200">
                       <Image src="/sukkari.webp" alt="Thumb" width={48} height={48} className="w-full h-full object-cover rounded-sm" />
                     </div>
                   </div>
                   <div className="flex-grow">
                     <span className="text-[15px] font-medium text-gray-800">{product.name}</span>
                   </div>
                   <div className="flex-shrink-0 text-right ml-4 hidden sm:flex items-center gap-2">
                     <span className="text-gray-400 line-through text-[13px]">{product.originalPrice}৳</span>
                     <span className="text-gray-800 font-bold text-[15px]">{product.salePrice}৳</span>
                   </div>
                 </div>
                 {/* Mobile pricing view */}
                 <div className="flex sm:hidden w-full justify-end mt-2 items-center gap-2 pl-14">
                   <span className="text-gray-400 line-through text-[13px]">{product.originalPrice}৳</span>
                   <span className="text-gray-800 font-bold text-[15px]">{product.salePrice}৳</span>
                 </div>
               </div>
             ))}
           </div>

           <h2 className="text-2xl font-bold text-center text-[#c07000] mb-8 border-t pt-8">অর্ডার করতে আপনার তথ্য দিন</h2>
           <form className="space-y-5 max-w-2xl mx-auto">
              <div>
                <label className="block text-gray-700 font-bold mb-2">আপনার নাম</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#008f11]" placeholder="আপনার নাম লিখুন" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">মোবাইল নাম্বার</label>
                <input type="tel" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#008f11]" placeholder="আপনার মোবাইল নাম্বার লিখুন" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">ঠিকানা</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#008f11]" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন" />
              </div>
              <button type="button" onClick={() => alert('Order Submitted!')} className="w-full bg-[#008f11] hover:bg-[#00700d] text-white text-xl font-bold py-4 rounded-md shadow-md mt-6 transition-colors">
                অর্ডার কনফার্ম করুন
              </button>
           </form>
        </div>

      </div>
    </main>
  );
}
