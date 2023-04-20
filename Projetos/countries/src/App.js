import './styles/App.css';
import Header from './components/Header'
import CardCountry from './components/CardCountry'
import Footer from './components/Footer'

const Main = () =>{
  return(
    <main>
      <div className="search-box">
        <input type="text" placeholder="Search coutries by name, city and languages" />
      </div>
      <div className="cards">
          <CardCountry />
          <CardCountry />
          <CardCountry />
          <CardCountry />
      </div>
      
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
