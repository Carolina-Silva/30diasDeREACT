import React from 'react';
import './App.css';

import DarkMode from './DarkMode';


const Header = () => (
  <header>
    <div className="logo">
      <h1>LOGO</h1>
    </div>
    <div className="toggle-theme-box">
        <DarkMode />
    </div>
  </header>
)

const CardUser = () => {
  return(
    <div className="card-user">
    <div className="card-header">
      <img src="https://avatars.githubusercontent.com/u/65463404?s=96&v=4" alt=" Imagem do usuario" />
      <h3>Carolina Silva</h3>
    </div><div className="card-main">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</p>
      <a href="/">
          <i className="bi bi-github"></i>
      </a>
      <a href="/">
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  </div>

  )
  

}

const Main = () => (
  <main>
    <CardUser /> 
  </main>
)



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
          
    </div>
  );
}

export default App;
