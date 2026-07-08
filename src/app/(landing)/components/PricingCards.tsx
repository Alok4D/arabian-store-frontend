export function PricingCards() {
  return (
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
  );
}
