import { useState } from 'react'
import Form from './components/Form.jsx'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'hero-container'}>
     <div>
         <img id={"image"} src="../public/hero.jpg" alt={'hero image'}/>
     </div>
     <Form />
    </div>
  )
}

export default App
