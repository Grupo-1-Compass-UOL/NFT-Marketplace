import './App.css';
import Rankings from './pages/Rankings';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout} from './pages/Root';

const BrowserRouter = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      {path: '/', element: <Rankings />},
      {path: '/rankings', element: () => <Rankings />},
    ],
  },
]);


function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
