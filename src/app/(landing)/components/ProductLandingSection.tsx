import { Check } from 'lucide-react';

export default function ProductLandingSection() {
  return (
    <div className="min-h-screen bg-[#eef9f3] bg-gradient-to-br from-[#f5fbf7] via-[#eef9f3] to-[#e4f5eb] py-12 px-4 md:px-8 lg:px-16 text-[#333333]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Top Header Banner */}
        <div className="w-full bg-[#E3FEEA] border border-[#d2edd9] rounded-md py-6 text-center px-4 shadow-sm">
          <h1 
            className="font-bold text-[#a46404] text-3xl md:text-[40px] md:leading-[60px]"
          >
            নতুন সিজনের সুপার প্রিমিয়াম সুক্কারি রুতাব
          </h1>
          <p 
            className="font-bold text-[#094166] text-xl md:text-[30px] md:leading-[60px]" 
            style={{ fontFamily: "'Boronomala', sans-serif" }}
          >
            খেজুরের জগতে সেরা স্বাদ ও মধুময় খেজুর!
          </p>
        </div>

        {/* Main Content Grid: Features & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Left Side: Features Lists */}
          <div className="lg:col-span-6 space-y-8 lg:pr-4">
            
            {/* List 1: Product Features */}
            <div>
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#a46404] mb-4">
                সুক্কারি রুতাব খেজুরের বৈশিষ্ট্য!
              </h2>
              <ul className="space-y-3">
                {[
                  "গাছপাকা ও রসালো খেজুর।",
                  "মধুর মতো মিষ্টি।",
                  "হাতের চাপেই গলে যায়।",
                  "মুখে দিলে মিলিয়ে যায়।",
                  "শিশু ও বৃদ্ধদের জন্যে খুবই উপযোগী।",
                  "কাঁচা কাঁচা ফ্লেভার পাওয়া যায়।"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[16px] md:text-[18px] font-medium text-black">
                    <div className="bg-[#009e19] rounded-full w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
                      <Check className="h-[14px] w-[14px] text-white stroke-[4]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* List 2: Why Choose Us */}
            <div>
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#a46404] mb-4">
                আমাদের রুতাব কেন সেরা?
              </h2>
              <ul className="space-y-3">
                {[
                  "প্রতিটি খেজুর বেছে বেছে প্যাকেজিং করা হয়।",
                  "বড় সাইজ।",
                  "পছন্দ না হলে রিটার্ন গ্যারান্টি।",
                  "প্রিমিয়াম ও মজবুত প্যাকেজিং।",
                  "প্রোডাক্ট দেখে রিসিভ করার সুযোগ।"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[16px] md:text-[18px] font-medium text-black">
                    <div className="bg-[#009e19] rounded-full w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
                      <Check className="h-[14px] w-[14px] text-white stroke-[4]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-[#009e19] hover:bg-[#008a16] text-white font-bold text-2xl px-12 py-3 rounded-md shadow-lg transition-all duration-200 transform hover:scale-105">
                অর্ডার করুন
              </button>
            </div>
          </div>

          {/* Right Side: Showcase Product Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
           <img src="/banner-img/product-banner.webp" alt="Sukkari Rutab" className="w-full max-w-[500px] h-auto object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Pricing & Packaging Packages Block */}
        <div className="space-y-6 pt-4">
          
          {/* Row 1: 1KG & 2KG Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 KG Card */}
            <div className="bg-[#f2fbf4] border border-[#d2edd9] rounded-md py-8 text-center px-4 shadow-sm text-lg md:text-xl font-bold text-black">
              <span className="text-[#a46404]">১ কেজি</span> সুপার প্রিমিয়াম সুক্কারি রুতাব{' '}
              <span className="text-red-600 ml-1">১১৯০ টাকা</span>
            </div>

            {/* 2 KG Card */}
            <div className="bg-[#f2fbf4] border border-[#d2edd9] rounded-md py-8 text-center px-4 shadow-sm text-lg md:text-xl font-bold text-black">
              <span className="text-[#a46404]">২ কেজি</span> সুপার প্রিমিয়াম সুক্কারি রুতাব{' '}
              <span className="text-red-600 ml-1">২২৯০ টাকা</span>
            </div>
          </div>

          {/* Row 2: 3KG Featured/Stretched Card */}
          <div className="w-full bg-[#f2fbf4] border border-[#d2edd9] rounded-md py-10 text-center px-4 shadow-sm">
            <p className="text-2xl md:text-[32px] font-bold text-black">
              <span className="text-[#a46404]">৩ কেজি</span> সুপার প্রিমিয়াম সুক্কারি রুতাব{' '}
              <span className="text-red-600 ml-2">৩৩০০ টাকা</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}