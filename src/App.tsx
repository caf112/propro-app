import React, { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import 'styles/App.css';


function App() {
  // const [playerName,playerName] = useState<string>("caf");
  const playerName = "caf";
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<GamePage playerName={playerName} />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;
