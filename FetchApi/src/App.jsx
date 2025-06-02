import { useEffect, useState } from 'react'
import './App.css'
const API = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [api, setApi] = useState([]);
  const fetchApi = () => {
      fetch(API) 
         .then((res) => res.json())
         .then((data) => {
            setApi(data);
         })
         .catch((error) => console.log(error));
  };
  

  useEffect(() => {
     fetchApi();
  },[])

  
  if(!api) return;

  console.log(api);

  return (
    <>
       <h1> Post </h1>
       {
          api.slice(0,5).map((item) => (
              <div key = {item.id}>
                  <h3> {item.userId}</h3>
                  <h3> {item.title} </h3>
                  <h3> {item.body}</h3>
              </div>
          ))
       }
    </>
  )
}

export default App
