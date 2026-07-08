'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';

const formSchema = z.object({
  customerName: z.string().min(2, { message: 'নাম অন্তত ২ অক্ষরের হতে হবে' }),
  phoneNumber: z.string().min(11, { message: 'সঠিক মোবাইল নাম্বার দিন' }),
  fullAddress: z.string().min(5, { message: 'পূর্ণাঙ্গ ঠিকানা দিন' }),
  packageType: z.enum(['1kg', '2kg', '3kg', '5kg']),
});

const packages = [
  { id: '1kg', weight: '১ কেজি', price: 1650 },
  { id: '2kg', weight: '২ কেজি', price: 3200 },
  { id: '3kg', weight: '৩ কেজি', price: 4500 },
  { id: '5kg', weight: '৫ কেজি', price: 7500 },
];

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('1kg');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: '',
      phoneNumber: '',
      fullAddress: '',
      packageType: '1kg',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!', {
        description: 'খুব শীঘ্রই আমাদের একজন প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#1a1a1a]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-primary font-semibold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
              খেজুর বাড়ি
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground gold-gradient-text drop-shadow-lg">
              মিশরীয় মেডজুল খেজুর
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              খেজুরের জগতে এক রাজকীয় অভিজ্ঞতা! প্রিমিয়াম কোয়ালিটি, নরম শাঁস এবং প্রাকৃতিক মিষ্টতায় ভরপুর আমাদের মিশরীয় মেডজুল হতে পারে আপনার সেরা পছন্দ।
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {['প্রিমিয়াম কোয়ালিটি', 'নরম শাঁস', 'প্রাকৃতিক মিষ্টতা'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium text-sm">{tag}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              এখনই অর্ডার করুন <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Hero Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative floating-image">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image 
                        src="/medjool-dates.png" 
                        alt="Medjool Dates Box" 
                        width={600} 
                        height={600} 
                        className="w-full h-auto rounded-3xl border border-primary/20 shadow-2xl"
                        priority
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image 
                        src="/medjool-texture.png" 
                        alt="Medjool Date Texture" 
                        width={600} 
                        height={600} 
                        className="w-full h-auto rounded-3xl border border-primary/20 shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4 hidden md:flex border-primary/50 text-primary hover:bg-primary/20 hover:text-primary" />
                <CarouselNext className="right-4 hidden md:flex border-primary/50 text-primary hover:bg-primary/20 hover:text-primary" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card px-6">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">কেন হাজারো মানুষ মেডজুল বেছে নিচ্ছেন?</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👑', title: 'রাজকীয় আকার ও রঙ', desc: 'সাধারণ খেজুরের তুলনায় অনেক বড়, গাঢ় বাদামি থেকে হালকা অ্যাম্বার রঙ এবং মোটা ও মাংসল শাঁস।' },
              { icon: '🍯', title: 'প্রাকৃতিক ক্যারামেল', desc: 'প্রাকৃতিক ক্যারামেলের মতো মিষ্টি, মোলায়েম ও নরম। মুখে দিলেই ধীরে ধীরে গলে যাওয়ার মতো অনুভূতি।' },
              { icon: '⚡', title: 'প্রাকৃতিক এনার্জি', desc: 'ফাইবার, পটাশিয়াম, ম্যাগনেশিয়াম ও অ্যান্টিঅক্সিডেন্টে ভরপুর। ব্যস্ত জীবনের জন্য সেরা স্বাস্থ্যকর স্ন্যাকস।' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8 text-center">
                    <div className="text-5xl mb-6 bg-primary/10 inline-block p-4 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">আমাদের প্যাকেজসমূহ</h2>
            <p className="text-muted-foreground">সারা বাংলাদেশে হোম ডেলিভারি দেওয়া হয়</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  form.setValue('packageType', pkg.id as any);
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Card className={`cursor-pointer h-full border-2 transition-all duration-300 hover:scale-[1.02] ${selectedPackage === pkg.id ? 'border-primary bg-primary/5 shadow-xl shadow-primary/20' : 'border-border/10 bg-card/5 hover:border-primary/50'}`}>
                  <CardContent className="pt-8 text-center">
                    <div className="text-2xl font-bold text-foreground mb-4">{pkg.weight}</div>
                    <div className="text-4xl font-extrabold text-primary mb-6">৳ {pkg.price}</div>
                    <Button variant={selectedPackage === pkg.id ? 'default' : 'outline'} className="w-full">
                      {selectedPackage === pkg.id ? 'নির্বাচিত' : 'নির্বাচন করুন'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 bg-background px-6 relative">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-primary/20 overflow-hidden">
              <div className="bg-secondary p-6 text-center border-b border-primary/20">
                <h2 className="text-2xl font-bold text-primary">অর্ডার করতে তথ্য দিন</h2>
                <p className="text-secondary-foreground text-sm mt-2">নিচের ফর্মটি পূরণ করুন, আমরাই কল দিয়ে কনফার্ম করব</p>
              </div>
              <CardContent className="p-8 bg-card">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                      control={form.control}
                      name="customerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">আপনার নাম *</FormLabel>
                          <FormControl>
                            <Input placeholder="উদাঃ মোঃ আব্দুল্লাহ" className="h-14 text-lg bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">মোবাইল নাম্বার *</FormLabel>
                          <FormControl>
                            <Input placeholder="01XXXXXXXXX" type="tel" className="h-14 text-lg bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">পূর্ণ ঠিকানা *</FormLabel>
                          <FormControl>
                            <Input placeholder="গ্রাম/রোড, থানা, জেলা" className="h-14 text-lg bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="packageType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">প্যাকেজ নির্বাচন করুন *</FormLabel>
                          <Select onValueChange={(val) => {
                            field.onChange(val);
                            setSelectedPackage(val);
                          }} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg bg-background">
                                <SelectValue placeholder="প্যাকেজ নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {packages.map(pkg => (
                                <SelectItem key={pkg.id} value={pkg.id}>
                                  {pkg.weight} - ৳ {pkg.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-16 text-xl rounded-xl shadow-lg mt-8" disabled={isSubmitting}>
                      {isSubmitting ? 'প্রসেস হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
