import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.style.backgroundColor = '#616263'
    ref.current.style.padding ='50px'
    ref.current.style.textAling='center'
  }
  return (
    <div className='App'>
      <h1 ref={ref}>DOM tree</h1>
      <button onClick={onClick}>getting content</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)