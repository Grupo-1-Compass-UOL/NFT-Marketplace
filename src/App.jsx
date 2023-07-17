import './App.css';
import Rankings from './pages/Rankings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import NFTPage from './components/NFT-Page/NFTPage';
import { CreateAccount } from './components/CreateAccount/CreateAccount';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Rankings /> },
      { path: '/rankings', element: <Rankings /> },
      { path: '/NFTPage', element: <NFTPage /> },
    ],
  },
];
const BrowserRouter = createBrowserRouter(routes);

function App() {
  return {
      < CreateAccount />
  };
}

export default App;
