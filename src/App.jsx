import './App.css';
import Header  from './components/header/Header';
import Footer  from './components/footer/Footer';
import HeroSection from './components/pages/homepage/herosection/HeroSection';
import TrendingCollection from './components/pages/homepage/trendingcollection/TrendingCollection';
import TopRatedArtists from './components/pages/homepage/topratedartists/TopRatedArtists';


function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <Footer />
    </main>
  )
}

export default App;



