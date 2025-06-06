
import { useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CategoryCollection from '../components/CategoryCollection';
import FeaturedSarees from '../components/FeaturedSarees';
import Footer from '../components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <CategoryCollection />
        <FeaturedSarees />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
