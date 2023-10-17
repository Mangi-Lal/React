//Sresult.jsx
import React from 'react';

const Sresult = (props) => {
    const url = `https://source.unsplash.com/500x400/?${props.Name}`;
    return (
        <>
        <div className='img_div'>
            <img src={url} alt='random'/>
        </div>
        </>
    );
}

export default Sresult;