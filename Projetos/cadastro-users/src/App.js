import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//react-router-dom@5.3.0

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Cadastro de Usuários</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div>
          <Route exact path='/read' component={Read} />
        </div>
        <div>
          <Route exact path='/update' component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;