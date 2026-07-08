'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const packages = [
  { id: '1kg', weight: '১ কেজি', price: 1650 },
  { id: '2kg', weight: '২ কেজি', price: 3200 },
  { id: '3kg', weight: '৩ কেজি', price: 4500 },
  { id: '5kg', weight: '৫ কেজি', price: 7500 },
];

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('1kg');
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    fullAddress: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate API call for design phase
    setTimeout(() => {
      setMessage('আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে! খুব শীঘ্রই আমরা যোগাযোগ করব।');
      setFormData({ customerName: '', phoneNumber: '', fullAddress: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>খেজুর বাড়ি</p>
            <h1 className={styles.heroTitle}>মিশরীয় মেডজুল খেজুর</h1>
            <p className={styles.heroDesc}>
              খেজুরের জগতে এক রাজকীয় অভিজ্ঞতা! আপনি যদি এমন একটি খেজুর খুঁজে থাকেন যা দেখতে যেমন আকর্ষণীয়, খেতেও তেমনি অসাধারণ—তাহলে মিশরীয় মেডজুল হতে পারে আপনার জন্য সেরা পছন্দ।
            </p>
            <div className={styles.heroTags}>
              <span className={styles.tag}>প্রিমিয়াম কোয়ালিটি</span>
              <span className={styles.tag}>নরম শাঁস</span>
              <span className={styles.tag}>প্রাকৃতিক মিষ্টতা</span>
            </div>
            <a href="#order" className={`btn btn-primary ${styles.submitBtn}`} style={{ display: 'inline-block', width: 'auto' }}>
              এখনই অর্ডার করুন
            </a>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/medjool-dates.png" 
              alt="Premium Egyptian Medjool Dates" 
              width={500} 
              height={500} 
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Medjool Section */}
      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>কেন হাজারো মানুষ মেডজুল বেছে নিচ্ছেন?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👑</div>
            <h3 className={styles.featureTitle}>রাজকীয় আকার ও রঙ</h3>
            <p>সাধারণ খেজুরের তুলনায় অনেক বড়, গাঢ় বাদামি থেকে হালকা অ্যাম্বার রঙ এবং মোটা ও মাংসল শাঁস।</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>😋</div>
            <h3 className={styles.featureTitle}>প্রাকৃতিক ক্যারামেল</h3>
            <p>প্রাকৃতিক ক্যারামেলের মতো মিষ্টি, মোলায়েম ও নরম। মুখে দিলেই ধীরে ধীরে গলে যাওয়ার মতো অনুভূতি।</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💪</div>
            <h3 className={styles.featureTitle}>প্রাকৃতিক এনার্জি</h3>
            <p>ফাইবার, পটাশিয়াম, ম্যাগনেশিয়াম ও অ্যান্টিঅক্সিডেন্টে ভরপুর। ব্যস্ত জীবনের জন্য সেরা স্বাস্থ্যকর স্ন্যাকস।</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.pricingSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>আমাদের প্যাকেজসমূহ</h2>
          <div className={styles.pricingGrid}>
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`${styles.priceCard} ${selectedPackage === pkg.id ? styles.selected : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className={styles.priceWeight}>{pkg.weight}</div>
                <div className={styles.priceAmount}>৳ {pkg.price}</div>
                <p>সারা বাংলাদেশে হোম ডেলিভারি</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className={`${styles.section} ${styles.orderSection}`}>
        <div className="container">
          <div className={styles.orderFormContainer}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>অর্ডার করতে তথ্য দিন</h2>
            
            {message && (
              <div style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '8px', backgroundColor: message.includes('সফলভাবে') ? '#e8f5e9' : '#ffebee', color: message.includes('সফলভাবে') ? '#2e7d32' : '#c62828' }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>আপনার নাম লিখুন *</label>
                <input 
                  type="text" 
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className={styles.formInput} 
                  placeholder="উদাঃ মোঃ আব্দুল্লাহ"
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>মোবাইল নাম্বার *</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={styles.formInput} 
                  placeholder="01XXXXXXXXX"
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>পূর্ণ ঠিকানা *</label>
                <input 
                  type="text" 
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleInputChange}
                  className={styles.formInput} 
                  placeholder="গ্রাম/রোড, থানা, জেলা"
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>প্যাকেজ নির্বাচন করুন *</label>
                <select 
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className={styles.formSelect}
                >
                  {packages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>{pkg.weight} - ৳ {pkg.price}</option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                {isSubmitting ? 'অর্ডার প্রসেস হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
