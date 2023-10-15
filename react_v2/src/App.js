// App.jsx
import React from "react";
import { Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Service from "./Service";
import Menu from "./Menu";

const App = () =>{
  return (
    <>
    <Menu/>
    <Routes>
      {/* Passing props to elements */}
      <Route exact path="/" element={<About Name='About'/>}/> 
      <Route exact path="/contact" element={<Contact Name='Contact'/>}/>
      <Route exact path="/service" element={<Service Name='Service'/>}/>
      <Route path="/*" Component={Error}/>
    </Routes>
    </>
  )
}

export default App;
