import { useState } from 'react'
import './App.css'
import Analog from './components/Analog/Analog';
import Digital from './components/digital/digital';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='c-wrapper'>
      <div className='c-container'>
        <Analog />
        <Digital />
      </div>
    </section>
  )
}

export default App
