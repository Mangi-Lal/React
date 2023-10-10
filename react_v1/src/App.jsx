//App.jsx
import React from "react";
import {add,sub,mul,div} from './Calculator';

let App = () => {
    return(
        <>
            <li>Sum of two numbers is: {add(30,6)}</li>
            <li>Substraction of two numbers is: {sub(30,6)}</li>
            <li>Multiplication of two numbers is: {mul(30,6)}</li>
            <li>Division of two numbers is: {div(30,7)}</li>
        </>
    );
}

export default App;