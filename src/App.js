import React,{useState,useRef} from 'react';
import Display from './components/display';
import Buttons from './components/buttons';
import "./styles/app.scss";


function App() {
 
  const [data,setData]=useState("");
  const [randomNum,setRandomNum]= useState("");
  const prevData=useRef("");
  const [time,setTime]=useState(0);
  const [timerOn,setTimerOn]=useState(false);
  
  
  
  
  return (
     <div className="App">
        
        <h1>Reaction game</h1>
        <button >start</button> 
        
        
        <Display data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum} prevData={prevData}/>
        <Buttons setData={setData} randomNum={randomNum}  prevData={prevData} time={time} setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn}/>
        

    </div>
  );
}

export default App;
