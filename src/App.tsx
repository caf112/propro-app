import React, { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'UserContext';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import MyPage from 'pages/MyPage';
import Register from 'pages/Register';
import questionsJson from 'database/CodeQuestions.json'
import 'styles/App.css';


function App() {
  // const [playerName,playerName] = useState<string>("caf");
  const playerName = "caf";
  const allQuestionsJsonsData = questionsJson;

  //ページ遷移
  
  return (
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<GamePage questionsJson={questionsJson} allQuestionsData={allQuestionsJsonsData} />}></Route>
      <Route path="/MyPage" element={<MyPage /> }></Route>
      <Route path='/Register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
  );
  
}

export default App;
