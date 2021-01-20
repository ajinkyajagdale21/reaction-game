import React,{useState} from 'react';
import Display from './components/display';
import Buttons from './components/buttons';
import "./styles/app.scss";

function App() {
 
  const [data,setData]=useState("");
  const [randomNum,setRandomNum]= useState("");

  return (
    <div className="App">
      
        <h1>Reaction game</h1>
        <Display data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum}/>
        <Buttons data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum} />
    
    </div>
  );
}

export default App;
