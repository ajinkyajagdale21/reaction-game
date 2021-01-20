import React from 'react';
import Display from './components/display';
import Buttons from './components/buttons';
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      
        <h1>Reaction game</h1>
        <Display/>
        <Buttons/>
    
    </div>
  );
}

export default App;
