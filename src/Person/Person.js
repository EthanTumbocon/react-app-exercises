import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
            <input type="text" onChange={props.changed}/>
            <p>{props.children}</p>
            <p>{props.children}</p>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>


        </div>
    )
};

export default person;