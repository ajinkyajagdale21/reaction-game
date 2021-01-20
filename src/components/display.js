import React,{useEffect} from 'react';


function Display({data,setData,randomNum,setRandomNum}) {
  
  useEffect(() => {
    setRandomNum( (Math.floor(Math.random() * (9 - 1 + 1) ) + 1).toString() );
  },[]);
  
  return (
      <div >
         <div className="input-feild">{randomNum}</div>
         <div className="input-feild">{data}</div>
      </div>
    );
  }
  
  export default Display;