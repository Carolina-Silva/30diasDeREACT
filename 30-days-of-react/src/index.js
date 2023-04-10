// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import foto from './img/img.png'

import logos from './img/logos.png';

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const Header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'Js', 'Sass', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Mysql', 'Docker', 'Git']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div className='card-user'>
    <img src={foto} alt='imagem ' />
    <h3>Your Name</h3>
    <p>Junior Developer, Brazil</p>
    <h3>Skills</h3>
    <ul>{techsFormatted}</ul>
    <spam>Joined on Aug 30, 2020</spam>
  </div>
)

// JSX element, main
const Main = (
  <main>
    <div className='main-wrapper'>
      {user}
    </div>
    <div className='front-end-tec'>
      <h1>Front End:</h1>
      <img src={logos} alt='log html css js'/>
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// exercicios
const Subscribe = (
  <div className='sub'>
    <h1>Subscribe</h1>
    <p>Sing up with your email address to receive news and updates.</p>
    <div>
    <input type='text' placeholder='First name'></input>
    <input type='text'placeholder='Last name' ></input>
    <input type='email' placeholder='your best email!'></input>
    </div>
    <button>Subscribe</button>
  </div>
)

// JSX element, footer
const Footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    <Header />
    <Main />
    <Subscribe />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)