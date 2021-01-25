import React from 'react';
import {Link} from "react-router-dom";

function Homepage() {

  return (
   <div>
        <h1>Reaction game</h1>
      <Link to="./merge" >
        <button>start</button>   
      </Link>
   </div>
  );
}

export default Homepage;
