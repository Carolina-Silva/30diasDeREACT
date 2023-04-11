import React from 'react'
import ReactDOM from 'react-dom'

import userimagem from '../src/img/img.png' 

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0,3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date}, ${year}`

}

const Header = ({
  data: {
    welcome, 
    title, 
    subtitle, 
    author: {firstName, lastName}, 
    date,
  },
}) => {
  return(
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const TechList = ({techs}) => {
  const techList = techs.map((tech) => <li key ={tech}>{tech}</li>)
  return techList
}

const UserCard = ({user: {firstName, lastName, image}}) =>(
  <div className='user-card'>
    <img src={image} alt={firstName}/>
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Button = ({text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)
const buttonStyle = {
  backgroundColor: '#ff55ff',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',

}

const Main = ({ user, techs, greetPeople, handleTime}) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user}/>
      <Button text='Greet People' onClick={greetPeople} style={buttonStyle} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyle} />

    </div>
  </main>
)

const Footer = ({copyRigth}) =>(
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRigth.getFullYear()}</p>
    </div>
  </footer>
)

const App = () =>{
  const data ={
    welcome: 'Seja bem-vindo',
    title: '30 dias de React',
    subtitle:'Biblioteca javascript',
    author:{
      firstName: 'Carolina',
      lastName:'Silva',
    },
    date: new Date(),
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']

  const user = {...data.author, image: userimagem}

  const handleTime = () =>{
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Bem-vindo ao desafio 30 dias de react')
  }

  return(
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        />
        <Footer copyRigth={date} />
    </div>
  )
  
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)