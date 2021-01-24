import React,{useEffect} from 'react';


function Display({data,setData,randomNum,setRandomNum,prevData}) {
   
  useEffect(() => {
    setRandomNum( (Math.floor(Math.random() * (9 - 1 + 1) ) + 1).toString() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
   prevData.current=data;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

 
  
  return (
      <div >
         <div className="input-feild">{randomNum}</div>
      </div>
    );
  }
  
  export default Display;