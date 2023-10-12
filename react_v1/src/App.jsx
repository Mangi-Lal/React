//App.jsx
import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favseries = 'amazon';
let FavS = () =>{
    if(favseries === 'netflix'){
        return <Netflix/>;
    }
    else {
        return <Amazon/>;
    }
}

const App = () =>{
    return(
    <>
        <h1 className="heading_style"> Top Web series in 2020 </h1>
        <FavS/>
    </>
    );
}
export default App;