import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'UserContext';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import MyPage from 'pages/MyPage';
import Register from 'pages/Register';
import Result from 'pages/Result';
import 'styles/App.css';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/MyPage" element={<MyPage /> }></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Result" element={ <Result /> }></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
  );
  
}

export default App;
