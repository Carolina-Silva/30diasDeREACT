import React from 'react'
import ReactDOM from 'react-dom'

//

const CatCard = () =>(
  <div className="card-cat">
    <div className="card-img">
    <img src="https://cdn2.thecatapi.com/images/MJWtDz75E.jpg" alt="cat image" />
        
    </div>
    <div className="card-description">
      <h4>American Bobtail</h4>
      <p>United States</p>
      <p><small>Temperament: </small>Intelligent, Interactive, Lively, Playful, Sensitive</p>
      <p><small>Life span:</small> 11 - 15 years</p>
      <p><small>Weight:</small> 3 - 7kg</p>
      <p><small>description:</small></p>
      <p>
      The American Bobtail is generally medium to large cat, with a naturally occurring bobbed tail. The American Bobtail is athletic and usually well-muscled with a sometimes powerful look. They possess a natural hunting gaze that combined with their body type, give American Bobtail a distinctive wild appearance.
      </p>
    </div>
  </div>

)

const Main = () => (
  <main>
    <CatCard />
  </main>
)

const App = () => (
  <div className='app'>
    <Main />
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
