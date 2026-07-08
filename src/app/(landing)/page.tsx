import { Header } from './components/Header';
import { Features } from './components/Features';
import { ProductImage } from './components/ProductImage';
import { PricingCards } from './components/PricingCards';
import CheckoutPage from './checkout/components/CheckoutPage';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import ProductLandingSection from './components/ProductLandingSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <ProductLandingSection />
        <CheckoutPage />
      </div>
      <CustomerReviews />
      <Footer />
    </main>
  );
}
