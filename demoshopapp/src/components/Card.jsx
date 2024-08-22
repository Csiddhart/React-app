import React from 'react';

import './Card.css';

const Card=(props)=>{
    const card='extrabackground'+props.className;//this is a new way to write your own css along with giving liberty to others to write there own css using props method
    return<div className={card}>
            {props.children}
        </div>
};

export default Card