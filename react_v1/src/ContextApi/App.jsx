//App.jsx
import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const App = () =>{
    return (
        <>
        <FirstName.Provider value={"Mangi"}>
            <LastName.Provider value={"Lal"}>
            <ComA/>
            </LastName.Provider>
        </FirstName.Provider>
        </>
    )
}

export default App;
export {FirstName,LastName};