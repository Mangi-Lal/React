//App.jsx
import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favseries = 'netflix';

const App = () =>{
    return(
    <>
        <h1 className="heading_style"> Top Web series in 2020 </h1>
        {favseries === 'netflix'?<Netflix/>:<Amazon/>}
    </>
    );
}
export default App;