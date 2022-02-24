// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    
    function watching(){
        console.log('Good!')
    }

    function notWatching(){
        console.log('Hey! Eyes on me!')
    }

    return(
        <div>
            <button onFocus={watching} onBlur={notWatching}>'Eyes on me'</button>
        </div>
    )
}

export default EyesOnMe;