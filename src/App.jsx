import './App.css';
import Rankings from './pages/Rankings/Rankings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Rankings /> },
      { path: '/rankings', element: <Rankings /> },
    ],
  },
];

const BrowserRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
