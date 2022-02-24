// Code Keypad Component Here
import React from "react";

function Keypad(){
    function keyPadChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input 
                type="password"
                onChange={keyPadChange}
            />
        </div>
    )
}





export default Keypad;