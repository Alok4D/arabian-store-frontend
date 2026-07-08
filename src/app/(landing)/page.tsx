import { Header } from './components/Header';
import { Features } from './components/Features';
import { ProductImage } from './components/ProductImage';
import { PricingCards } from './components/PricingCards';
import CheckoutPage from './components/CheckoutPage';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-10">
        <Header />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 items-stretch">
          <Features />
          <ProductImage />
        </div>
        <PricingCards />
        <CheckoutPage />
      </div>
      <CustomerReviews />
      <Footer />
    </main>
  );
}
