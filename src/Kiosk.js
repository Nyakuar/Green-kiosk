import { useState, useEffect } from "react";

const urls = [
  'http://localhost:5000/products/fruits',
  'http://localhost:5000/products/vegetables'
]
const Kiosk =() =>{
  const [fruits, setFruit] = useState()
  const [vegetable,setVegetable] = useState()
  const [loading , setLoading] = useState(false);
  useEffect(() => {   
      products()  
  },[])  
  const products = ()=>{
  Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
    data => {
      setFruit(data.at(0))
      setVegetable(data.at(1))
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
          {fruits.map(item =>(
        <div key={item.id}>
            <p> {item.name}</p> 
        </div>
      ))} </div>
       <h3>Vegetables</h3>
       <div className="fruits"> 
      {vegetable.map(item =>(
        <div className="vegetables" key={item.id}>
            <p> {item.name}</p>        
        </div>
      ))}</div>
      </div>
       </div>
    )
}
export default Kiosk;