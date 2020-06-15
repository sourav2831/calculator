import React from "react";
import "../styles.css"
const symbols=["AC","ANS","=",".","/","7","8","9","*","4","5","6","-","1","2","3","+","(","0",")"];

function Keys(props){
    return <div onClick={()=>{props.getClick(props.symbol)}} className="key">
        {props.symbol}
    </div>
}
export default Keys;
export {symbols};