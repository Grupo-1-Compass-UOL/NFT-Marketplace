import HeroSection from './components/pages/homepage/herosection/HeroSection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TrendingCollection from './components/pages/homepage/trendingcollection/TrendingCollection';

import './App.css';

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrendingCollection />
      <Footer />
    </main>
  );
}

export default App;

