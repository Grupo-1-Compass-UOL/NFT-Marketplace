import './App.css';
import Rankings from './pages/Rankings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import NFTPage from './components/NFT-Page/NFTPage';
import HomePage from './pages/Homepage';
import ConnectWallet from './components/connectWallet/connectWallet';
import CreateAccount from './components/createAccount/CreateAccount';
import ArtistPage from './components/artistPage/ArtistPage';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/rankings', element: <Rankings /> },
      { path: '/NFTPage', element: <NFTPage />},
      { path: '/connectWallet', element: <ConnectWallet/>},
      { path: '/createaccount', element: <CreateAccount />},
      { path: '/artistpage', element: <ArtistPage />},
      { path: '/NFTPage', element: <NFTPage />}
 
    ],
  },
];
const BrowserRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;