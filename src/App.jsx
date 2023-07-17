import './App.css';
import Rankings from './pages/Rankings';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';
import Marketplace from './pages/Marketplace';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Rankings /> },
      { path: '/rankings', element: <Rankings /> },
      {path: '/marketplace', element: <Marketplace />},
    ],
  },
];

const BrowserRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
