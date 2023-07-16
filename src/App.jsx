import './App.css';
import HeroSection from './components/pages/homepage/herosection/HeroSection';
import TrendingCollection from './components/pages/homepage/trendingcollection/TrendingCollection';
import { CreateAccount } from './components/createAccount/createAccount';
import Header from './components/header/header';

import Footer from './components/footer/footer';


function App() {
  return (
    <main>
      <Header />
      <CreateAccount />
      <Footer />
    </main>
  )
}

export default App;


