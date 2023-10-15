import React, { useEffect, useState } from "react";

const App = () =>{
    const [num,setNum] = useState(0);
    const [num2,setNum2] = useState(0);
    useEffect(
        //everytime we click any button or refresh the page this function is called.
        // () =>{alert('clicked');}
        //empty array ([]) means jb first time page render hoga only tbhi ye function call hoga..
        // () =>{alert('clicked');},[]
        //function is called only when page refreshed and button associated with 'num' is pressed..
        () =>{alert('clicked');},[num]
    )

    return (
    <>
    <button onClick={(() =>{
        setNum(num+1);
    }
    //If we not use useEffect then only alert vala function is called
    // () =>{
    //     alert('Clicked');
    // }
    )}>
    Click {num}
    </button>
    <br/>
    <button onClick={(() =>{
        setNum2(num2+1);
    }
    )}>
    Click {num2}
    </button>
    </>
    );
}

export default App;