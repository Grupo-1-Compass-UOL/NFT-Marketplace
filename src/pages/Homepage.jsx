import '../App.css'
import HeroSection from './homepage/herosection/HeroSection';
import TrendingCollection from './homepage/trendingcollection/TrendingCollection';
import TopRatedArtists from './homepage/topratedartists/TopRatedArtists';
import BrowseCategories from './homepage/BrowseCategories/BrowseCategories';
import SubscribeWidget from './homepage/SubscribeWidget/SubscribeWidget';
import NFTHighLight from './homepage/NFTHighLight/NFTHighLight';


function Homepage() {
  return (
    <>
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <NFTHighLight/>
      <SubscribeWidget />
    </>
  )
}

export default Homepage