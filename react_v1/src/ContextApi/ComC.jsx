//ComC.jsx
import React from "react";
import { FirstName, LastName } from "./App";

const ComC = () =>{
    return (
        <>
        <FirstName.Consumer>
            {/* Provider jo value me pass krta h vo fname me aa jayega. */}
            {(fname) =>{
                return(
                    <LastName.Consumer>
                        {(lname)=>{
                            return <h1>I'm {fname} {lname}</h1>;
                        }}
                    </LastName.Consumer>
                );
            }}
        </FirstName.Consumer>
        </>
    );   
}

export default ComC;