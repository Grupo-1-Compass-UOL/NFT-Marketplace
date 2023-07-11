import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import Rankings from './pages/Rankings';

function App() {
  return (
    <main>
      <Header />
      <Rankings />
      <Footer />
    </main>
  )
}

export default App;
