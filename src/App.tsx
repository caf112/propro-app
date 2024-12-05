import "@aws-amplify/ui-react/styles.css";

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { UserProvider, useUser } from 'UserContext';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import MyPage from 'pages/MyPage';
import Register from 'pages/Register';
import Result from 'pages/Result';
import Login from "pages/Login";
import 'styles/App.css';
import ProtectedRoute from 'components/features/auths/ProtectedRoute';
// import { AwsAuthProps } from 'models/Types';


function App() {

  return (
    <div className="app-container">
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={
        <ProtectedRoute >
          <GamePage />
        </ProtectedRoute>
        } />
      <Route path="/MyPage" element={
        // <ProtectedRoute>
          <MyPage /> 
        // </ProtectedRoute>
        } />
      <Route path="/Register" element={<Register />} />
      <Route path="/Result" element={ <Result /> } />
      <Route path="/Login" element={
        <Login />
      } />

      {/* <Route path="/Test" element={
        <HeaderWithToggleMenu />
      } /> */}

    </Routes>
    </BrowserRouter>
    </UserProvider>
    
    </div>
  );
  
}

export default App;
