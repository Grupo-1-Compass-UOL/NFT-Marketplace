import HeroSection from '../pages/homepage/herosection/HeroSection';
import TrendingCollection from '../pages/homepage/trendingcollection/TrendingCollection';
import TopRatedArtists from '../pages/homepage/topratedartists/TopRatedArtists';

function HomePage() {
  return (
    <>
       <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
    </>
  )
}

export default HomePage