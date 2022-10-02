import React from "react";
import Navbar from './Navbar';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import Products from './Products';
import Form from "./Form";



function App() {
  return (
 
    <Router>
    <Navbar />
    {/* <Routes> */}
      <Route path='/' exact component={Form} />
      <Route path='/products' component={Products} />
      <Route path='/vegetables' component={Vegetables} />
      <Route path='/fruits' component={Fruits} />
    {/* </Routes> */}
  </Router>
    
  );
}

export default App;
