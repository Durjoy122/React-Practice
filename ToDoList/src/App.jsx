import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chips from './Chips';
import './style.css';

function App() {
  const [chips, setChips] = useState([]);

  let saveToDoList = (event) => {
     event.preventDefault();
     let name = event.target.name.value.trim();
     if (!name) return;
     let addChips = [...chips, name];
     setChips(addChips);
     event.target.name.value = ""; // clear the text box
  }

  const handleDeleteChip = (indexToRemove) => {
        const newChips = chips.filter((_, index) => index !== indexToRemove);
        setChips(newChips);
  };

  return (
    <>
      <Chips
         chips = {chips}
         handleDeleteChip = {handleDeleteChip}
         saveToDoList={saveToDoList}
      />
    </>
  )
}

export default App
