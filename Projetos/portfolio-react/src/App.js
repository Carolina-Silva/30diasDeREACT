import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer'

import ProjetoCard  from './components/ProjetoCard'



const Main = () => {
  return(
    <main>
      <Home />
      <div className="cards">
      <ProjetoCard />
      <ProjetoCard />
      </div>
      <About />

      
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
