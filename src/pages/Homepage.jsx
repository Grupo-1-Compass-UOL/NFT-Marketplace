import './App.css';
import Header  from './components/header/Header';
import Footer  from './components/footer/Footer';
import HeroSection from './components/pages/homepage/herosection/HeroSection';
import TrendingCollection from './components/pages/homepage/trendingcollection/TrendingCollection';
import TopRatedArtists from './components/pages/homepage/topratedartists/TopRatedArtists';
import BrowseCategories from './components/pages/homepage/BrowseCategories/BrowseCategories';


function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <Footer />
    </>
  )
}

export default Homepage