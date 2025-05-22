import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from './Color'

function App() {
  const [color, setColor] = useState('green');
  
  function handleChange(event) {
     setColor(event.target.value);
  }
  return (
    <main>
       <div style={{ margin: "20px" }}>
            <label htmlFor="fruit">Choose a color </label>
            <select id="fruit" value={color} onChange={handleChange}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"orange"}>Orange</option>
            </select>
        </div>
       <Color color = {color}/> 
    </main>
  )
}

export default App
