import './App.css';
import { Outlet } from "react-router-dom"

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
  return (
    <main>
        <Outlet/>
    </main>
  );
}

export default App;


