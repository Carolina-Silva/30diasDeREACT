// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImg from './images/html_logo.png'
import cssImg from './images/css_logo.png'
import reactImg from './images/react_logo.png'
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
const Header = () => (
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

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)


const technologies = ['html', 'css', 'js', 'sass', 'react', 'MongoDB', 'Python', 'git']
const technologiesFormatted = techs.map((tech) => <li className='user-techs'>{tech}</li>)


const User = () => (
  <div className='card-user'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h4>Asabene yetayeh</h4>
    <small>Senior Developer, Finland</small>
    <h4>Skills</h4>
    <ul>{technologiesFormatted}</ul>
  </div>
)

const FrontTechs = () => (
  <div className="card-tech">
    <h3>Front-End technologies</h3>
    <div className="card-img">
      <img src={htmlImg} alt="logo html" className="img-tech" />
      <img src={cssImg} alt="logo css" className="img-tech" />
      <img src={reactImg} alt="react logo" className="img-tech" />
    </div>
  </div>
)

const Subscribe = () => (
  <div className="sub">
    <h2>Subscribe</h2>
    <p>Sing up with your email address to receive news and updates</p>
    <div className="inputs">
      <input type="text" placeholder='Fist Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type="email" placeholder='Email'/>
    </div>
    <button>Subscribe</button>
  </div>
)


// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      <User/>
      <FrontTechs/>
      <Subscribe/>
    </div>
  </main>
)


const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    <Header/>
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)