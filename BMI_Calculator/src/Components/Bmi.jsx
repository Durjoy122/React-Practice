import  React , {useState} from 'react';
import "../bmi.css";

function Bmi() {
  const [height , setHeight] = useState('');
  const [weight , setWeight] = useState('');
  const [bmi , setBmi] = useState(null);
  const [category, setCategory] = useState('');

  let CalculateBMI = () => {
       let Weight = parseFloat(weight);
       let Height = parseFloat(height);
       if (isNaN(Weight) || isNaN(Height) || Weight <= 0 || Height <= 0) {
           alert("Please enter valid weight and height.");
           return;
       }
       const heightInMeters = Height / 100;
       const calculatedBMI = Weight / (heightInMeters * heightInMeters);
       const roundedBMI = calculatedBMI.toFixed(1);
       setBmi(roundedBMI);
       setCategory(getCategory(roundedBMI));
  }

  let getCategory =(value)=> {
     if(value < 18.5) {
         return "Underweight";
     } 
     else if (value >= 18.5 && value < 24.9) {
         return "Normal weight";
     } 
     else if (value >= 25 && value < 29.9) {
         return "Overweight";
     } 
     else {
         return "Obesity";
     }
  }

  let Reset = () => {
      setHeight('');
      setWeight('');
      setBmi(null);
      setCategory('');
  }

  return (
    <div className="wrapper">
        <div className="bmi-container">
            <h1> BMI Calculator </h1>
            <div className ="input"> 
            <label>Weight (kg):</label> 
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                />
            </div>

            <div className ="input">
            <label>Height (cm):</label>
            <input
                type = "number"
                value = {height}
                onChange={(e)=> setHeight(e.target.value)}
                placeholder="Enter height"
            />
            </div>

            <div className="buttons">
                <button onClick={CalculateBMI}>Calculate</button>
                <button onClick={Reset}>Reset</button>
            </div>
            {bmi && (
                <div className="buttons">
                    <h2> Your BMI : {bmi} </h2>
                    <h2> Category : {category} </h2>
                </div>
            )}
        </div>
    </div>
  )
}

export default Bmi