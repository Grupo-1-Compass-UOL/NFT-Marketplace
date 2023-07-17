import './App.css';
<<<<<<< HEAD
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';
import { CreateAccount } from './components/CreateAccount/CreateAccount';
import Footer from './components/Footer/Footer';
import SubscribeWidget from './components/pages/homepage/SubscribeWidget/SubscribeWidget';
function App() {
  return (
    <main>
<<<<<<< HEAD

=======
      <Header />
      <HeroSection />
      <TrendingCollection />
      <Footer />
  
>>>>>>> eb8ffe7f60330511d48962101857de9bd6d4e9c2
    </main >
  )

}

export default App;


=======
import Rankings from './pages/Rankings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import NFTPage from './components/NFT-Page/NFTPage';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Rankings /> },
      { path: '/rankings', element: <Rankings /> },
      { path: '/NFTPage', element: <NFTPage />},
    ],
  },
];
const BrowserRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
>>>>>>> 793e16af10d0ff4fa7b71eabe0db4501cfbd162b
