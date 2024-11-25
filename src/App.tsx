import React, { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'UserContext';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import MyPage from 'pages/MyPage';
import Register from 'pages/Register';
import questionsJson from 'datas/CodeQuestions.json'
import 'styles/App.css';
import Preview from 'pages/Preview';


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
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/MyPage" element={<MyPage /> }></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Preview" element={ <Preview /> }></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
  );
  
}

export default App;
