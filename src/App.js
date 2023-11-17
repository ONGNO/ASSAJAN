import React, { useState } from 'react';
import './App.css';
import InfoDisplay from './InfoDisplay';
import Home from './Home'; 
function App() {
  const [message, setMessage] = useState(" Profile");
  const [displayMessage, setDisplayMessage] = useState("Home"); 

  const handleClick = () => {
    setMessage(" Profile ");
    setDisplayMessage(" 6302941  ASSAJAN PHUDRUNG")
  };

  const goHome = () => {
    setMessage("Profile");
    setDisplayMessage("Home"); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={goHome}>></button> {}
        <InfoDisplay message={message} onClick={handleClick} />
        {displayMessage === "Home" ? <Home /> : displayMessage}
      </header>
    </div>
  );
}

export default App;
