import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './Components/StarRating';

function App() {
  return (
    <div  style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1> Rating </h1>
       <StarRating />
    </div>
  )
}

export default App
