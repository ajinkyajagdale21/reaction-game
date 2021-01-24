import React,{useEffect,useState} from 'react';

function Buttons({setData,randomNum,prevData,time,setTime,timerOn,setTimerOn}) {
   
  
  const [gotData,setgotData]=useState(false);

 
  const btnClickedHandler=(e)=>{
    setData(e.target.value);
    setgotData(true);
 }
  
  
   useEffect(() => {
    setTimerOn(true);
    if(gotData===true)
    if(randomNum===prevData.current){
          // console.log("done");
        setTimerOn(false);
      } 
     else{
      setTimerOn(false); 
      setTime(0);
     }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gotData]);

   useEffect(() => {
    let interval=null;

    if(timerOn){
        interval =setInterval(() => {
            setTime(prevTime=>prevTime+10)
        }, 10);
    }
    else{
        clearInterval(interval);
    }
    return () => {
        clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn])
 

    
  
   return (
      <div>
      <div className="wrapper">
            <button value='1' className="btn" onClick={btnClickedHandler}>1</button>
            <button value='2' className="btn" onClick={btnClickedHandler} >2</button>
            <button value='3' className="btn" onClick={btnClickedHandler} >3</button>
            <button value='4' className="btn" onClick={btnClickedHandler} >4</button>
            <button value='5' className="btn" onClick={btnClickedHandler} >5</button>
            <button value='6' className="btn" onClick={btnClickedHandler} >6</button>
            <button value='7' className="btn" onClick={btnClickedHandler} >7</button>
            <button value='8' className="btn" onClick={btnClickedHandler} >8</button>
            <button value='9' className="btn" onClick={btnClickedHandler} >9</button>
          </div>    
           
         <div>
         
          <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}seconds: </span>
          <span>{("0"+((time/10)%100)).slice(-2)} millisonds</span>
          <h2>Your Reaction time should be less than 0.8 milliseconds</h2>
         </div>
    
        
      
      </div>
    );
  }
  
  export default Buttons;