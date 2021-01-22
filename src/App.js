import React,{useState,useRef} from 'react';
import Display from './components/display';
import Buttons from './components/buttons';
import "./styles/app.scss";


function App() {
 
  const [data,setData]=useState("");
  const [randomNum,setRandomNum]= useState("");
  const prevData=useRef("");
  
  return (
    <div className="App">
      
        <h1>Reaction game</h1>
        <Display data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum} prevData={prevData}/>
        <Buttons data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum} prevData={prevData}/>
      
    </div>
  );
}

export default App;
