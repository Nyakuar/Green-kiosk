import { useState, useEffect } from "react";
import './App.css'


const Fruits =() =>{
    const [fruit, setFruit] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {   
        fruits()  
    },[])  
    const fruits = ()=>{
     fetch('http://localhost:5000/products/fruits')
     .then(res => res.json())
     .then(
      data => {
        setFruit(data)
        setLoading(true)
        console.log("fetched data----->",data )})
      .catch (err =>{throw  new Error (err.message)});
  }
  if(!loading){
    console.log("loading data----->",loading);
    return <div>Loading.........</div>
  }
      return (
         <div>
          <h2>Welcome to GreensKiosk</h2>
          <p id="unique">We have fruits and vegetables</p>
          <div className="container">
          <h3>Fruits</h3>
          <div className="fruits">
            {fruit.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p> 
          </div>
        ))} </div>
                 
          </div>
        </div>
      )
  }
  export default Fruits;