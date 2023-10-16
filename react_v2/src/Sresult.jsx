//Sresult.jsx
import React from 'react';

const Sresult = (props) => {
    const url = `https://source.unsplash.com/400x300/?${props.Name}`;
    return (
        <>
        <div>
            <img src={url} alt='random'/>
        </div>
        </>
    );
}

export default Sresult;