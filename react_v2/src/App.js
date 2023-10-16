// App.jsx
import React from "react";
import { Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Service from "./Service";
import User from "./User";
import Menu from "./Menu";
import Search from "./Search";

const App = () =>{
  return (
    <>
    <Menu/>
    <Routes>
      {/* Passing props to elements */}
      <Route exact path="/" element={<About Name='About'/>}/> 
      <Route exact path="/contact" element={<Contact Name='Contact'/>}/>
      <Route exact path="/service" element={<Service Name='Service'/>}/>
      <Route path="/search" element={<Search/>} /> 
      {/* :fname is called parameter */}
      {/* <Route path="/user/:fname" element={<User/>}/> //This is using single parameter  */}
      <Route path="/user/:fname/:lname" element={<User/>}/>

      <Route path="/*" Component={Error}/>
    </Routes>
    </>
  )
}

export default App;
