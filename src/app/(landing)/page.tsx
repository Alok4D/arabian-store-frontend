
import CheckoutPage from './checkout/page';
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
