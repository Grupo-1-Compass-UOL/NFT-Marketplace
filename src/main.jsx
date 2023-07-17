import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/index.css';
import NFTPage from './components/NFT-Page/NFTPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/NFTPage',
        element: <NFTPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
