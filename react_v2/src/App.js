// App.jsx
import React from "react";
import { Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";

const App = () =>{
  const Name = () =>{
    return <h1> My Name is Mangi</h1>
  }
  return (
    <>
    <Menu/>
    <Routes>
      <Route exact path="/" Component={About}/> 
      <Route path="/contact" Component={Contact}/>
      {/* Or we can write
          <Route path="/contact" element={<Contact/>}/> */}
      <Route path="/contact/name" Component={Name}/>
      <Route path="/*" Component={Error}/>
    </Routes>
    </>
  )
}

export default App;
