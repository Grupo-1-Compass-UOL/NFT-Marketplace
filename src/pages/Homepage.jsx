import '../App.css'
import HeroSection from './homepage/herosection/HeroSection';
import TrendingCollection from './homepage/trendingcollection/TrendingCollection';
import TopRatedArtists from './homepage/topratedartists/TopRatedArtists';
import BrowseCategories from './homepage/BrowseCategories/BrowseCategories';
import SubscribeWidget from './homepage/SubscribeWidget/SubscribeWidget';
import NFTHighLight from './homepage/NFTHighLight/NFTHighLight';
import DiscoverMore from './homepage/DiscoverMore/DiscoverMore'
import Works from './homepage/Works/Works';


function Homepage() {
  return (
    <>
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <DiscoverMore />
      <NFTHighLight />
      <Works />
      <SubscribeWidget />
    </>
  )
}

export default Homepage