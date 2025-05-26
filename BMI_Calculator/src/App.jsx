import { useState } from 'react'
import Bmi from './Components/Bmi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bmi />
    </>
  )
}

export default App
