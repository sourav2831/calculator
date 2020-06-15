import React,{useState} from 'react';
import Show from "./Show.js";
import Keys,{symbols} from "./Keys.js"
import "../styles.css"
function App() {
  const [inputText,setInputText]=useState("");
  const [ans,setAns]=useState(0);
  function handleClick(symbol){
    if(inputText==="Syntax Error!"){
      setAns(0);
      setInputText("");
    }
    if(symbols.includes(symbol,3)){
      setInputText((prevText)=>{
        return prevText+symbol;
      })
    }
    else if(symbol===symbols[2]){
      try{
      const result=window.eval(inputText);
      setInputText(result);
      setAns(result);
      }
      catch{
        setInputText("Syntax Error!");
      }      
    }
    else if(symbol===symbols[0]){
      setAns(0);
      setInputText("");
    }
    else{
      setInputText((prevText)=>{
        typeof prevText==="number" ? prevText=prevText+ans : 
        prevText.charAt(prevText.length-1)==="/" || prevText.charAt(prevText.length-1)==="*" || prevText.charAt(prevText.length-1)==="+" || prevText.charAt(prevText.length-1)==="-" ? 
        prevText=prevText+ans:prevText=prevText;
        return prevText;
      })
    }
  }
  
  return (
    <div>
      <h1>Calculator</h1>
      <div className="container">
        <div className="calculator">
          <div className="showOutput">
            <Show showInput={inputText}/>
          </div>
          <div className="keyBoard">
          {
            symbols.map(symbol =>{ 
            return <Keys getClick={handleClick} symbol={symbol}/>
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;