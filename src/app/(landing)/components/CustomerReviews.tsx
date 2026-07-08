import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function CustomerReviews() {
  // Placeholder data for reviews
  // Replace the image URLs with your actual review screenshots/images once you have them
  const reviews = [
    { id: 1, image: '', reviewNumber: '৭' },
    { id: 2, image: '', reviewNumber: '১৬' },
    { id: 3, image: '', reviewNumber: '২' },
  ];

  return (
    <div className="py-16 bg-[#e8f6ed] w-full mt-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
          কাস্টমার রিভিউ
        </h2>
        
        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Left Arrow (Visible on desktop) */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md z-10 hidden md:flex items-center justify-center text-orange-500 transition-all cursor-pointer">
            <ChevronLeft size={24} />
          </button>

          {/* Reviews Grid/List */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar pb-4 md:grid md:grid-cols-3 md:overflow-visible md:snap-none">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-none w-[85%] md:w-auto snap-center relative aspect-[4/4.5] md:aspect-auto md:h-full bg-gradient-to-b from-[#ff9a00] to-[#ff8c00] rounded-xl overflow-hidden shadow-md border-[3px] border-[#ff9a00]"
              >
                {/* 
                  When you have the full images exported from Canva/Photoshop, 
                  you can replace this entire inner div with:
                  <Image src={review.image} alt={`Review ${review.id}`} fill className="object-cover" /> 
                */}
                <div className="w-full h-full p-4 flex flex-col relative" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    
                    {/* Top part: Text & Logo Placeholder */}
                    <div className="text-center font-bold text-black mb-4 relative z-10">
                        <p className="text-[15px] md:text-base">সম্মানিত কাস্টমারদের রিভিউ</p>
                        <p className="text-[14px] md:text-sm mt-0.5">রিভিউ নম্বর {review.reviewNumber}</p>
                        
                        <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-white/50 rounded-full border border-black flex items-center justify-center text-[8px] font-bold">
                            LOGO
                        </div>
                    </div>

                    {/* Middle part: The white box for the screenshot */}
                    <div className="w-full bg-white flex-1 rounded-lg mb-12 flex flex-col items-center justify-center text-neutral-400 p-4 text-center text-sm shadow-sm relative z-10">
                        <span className="mb-2">Image Placeholder</span>
                        <span className="text-xs">Replace with your real review screenshot</span>
                    </div>

                    {/* Bottom part: Footer */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-black font-bold z-10">
                        <div className="text-left">
                           {/* Placeholder for the bowl of dates */}
                           <div className="w-16 h-12 bg-black/20 rounded-t-full mb-1"></div>
                           <span className="block text-[11px] md:text-xs">সুক্কারি রুতাব খেজুর</span>
                        </div>
                        <div className="text-right text-[10px] md:text-[11px] leading-tight">
                           <p className="flex justify-end items-center gap-1">01817-113624 <span className="text-sm">📞</span></p>
                           <p className="flex justify-end items-center gap-1 mt-1">arabianstorebd.com <span className="text-sm">🌐</span></p>
                        </div>
                    </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md z-10 hidden md:flex items-center justify-center text-orange-500 transition-all cursor-pointer">
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
        </div>

      </div>
    </div>
  );
}
