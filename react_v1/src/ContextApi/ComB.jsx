//ComB.jsx
import React, { useContext } from "react";
import ComC from "./ComC";
import { FirstName, LastName } from "./App";

const ComB = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return <h1>I'm {fname} {lname}</h1>;
}

export default ComB;