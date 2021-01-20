import React from 'react';

function Buttons({data,setData,randomNum,setRandomNum}) {
 
  const btnClickedHandler=(e)=>{
    setData(e.target.value)
  
    if(data===randomNum){
     
      console.log("congrats");
    
       setData("");
       setRandomNum("");
    } 
  }
  
  
    
  
   return (
      <div>
        
        
        <div className="wrapper">
           
            <button value='1' className="btn" onClick={btnClickedHandler}>1</button>
            <button value='2' className="btn" onClick={btnClickedHandler}>2</button>
            <button value='3' className="btn" onClick={btnClickedHandler}>3</button>
            <button value='4' className="btn" onClick={btnClickedHandler}>4</button>
            <button value='5' className="btn" onClick={btnClickedHandler}>5</button>
            <button value='6' className="btn" onClick={btnClickedHandler}>6</button>
            <button value='7' className="btn" onClick={btnClickedHandler}>7</button>
            <button value='8' className="btn" onClick={btnClickedHandler}>8</button>
            <button value='9' className="btn" onClick={btnClickedHandler}>9</button>
        </div>   
        
        
      
      </div>
    );
  }
  
  export default Buttons;