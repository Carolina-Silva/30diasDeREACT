import React from 'react'
import ReactDOM from 'react-dom'

import arrowRepeat from './images/arrow-repeat.svg'
import heart from './images/heart.svg'
import pencilSquare from './images/pencil-square.svg'
import personCircle from './images/person-circle.svg'
import trash from './images/trash.svg'
import twitter from './images/twitter.svg'

const Header = () => (
  <header>
    <div className="header">
      <img src={twitter} />
    </div>
  </header>
)

const InputTweet = () =>(
  <div className="input-tweet-box">
    <input 
    type="text" 
    name="input-tweet" 
    id="input-tweet"
    placeholder='Escreva sobre o Desafio React' 
    />
    <button className='btn-tweet-post'> Add post</button>
  </div>
)

const Tweet = () =>(
  <div className="tweet-card">
    <div className="tweet-header">
      <img src={personCircle}/>
      <h5>Nome User</h5>
      <small>@user</small>
    </div>
    <div className="tweet-main">
      <p>
      30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students. 
      </p>
    </div>
    <div className="tweet-footer">
      <div className='edit'>
        <a href="/">
          <img src={pencilSquare} />
        </a>
        <a href="/">
          <img src={trash} />
        </a>
      </div>
      <div className='like'>
          <img src={heart} />
          <img src={heart} />
          <img src={arrowRepeat} />
      </div>
      <div className='date'>
        <small>Apr 18, 2023 14:29</small>
      </div>
    </div>
  </div>
)

const Main = () => (
  <main>
    <InputTweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    
  </main>
)

const App = () => (
  <div className='app'>
    <Header/>
    <Main />
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
