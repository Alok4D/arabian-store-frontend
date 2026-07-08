'use client';

import { Check } from 'lucide-react';

export function Features() {
  return (
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
  );
}
