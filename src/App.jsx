import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CreateAccount } from './components/createAccount/createAccount';


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

