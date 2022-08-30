import React, {useRef} from "react";


export const Card = ({name}) => {
    const divRef = useRef();
    const changeStyles = () => {

        console.log(divRef.current.style.color = 'red');
    };

    


   
    return  <div ref={divRef} onClick={changeStyles}>  I am {name}</div>;
    
};