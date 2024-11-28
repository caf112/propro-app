import { Amplify } from 'aws-amplify'; 
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports"

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'UserContext';
import Home from 'pages/Home';
import GamePage from 'pages/GamePage';
import MyPage from 'pages/MyPage';
import Register from 'pages/Register';
import Result from 'pages/Result';
import 'styles/App.css';
import ProtectedRoute from 'components/features/auths/ProtectedRoute';
import { AwsAuthProps } from 'models/Types';

Amplify.configure(awsExports);

function App({ signOut, user }: AwsAuthProps ) {
  return (
    <div>
      {
        user ? (
          <>
            <h3>私は権限を持っています:{user.username}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ): (
          <h3>権限がありません</h3>
        )
      }
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home signOut={signOut} user={user} />}>
      </Route>
      <Route path="/game" element={
        // <ProtectedRoute >
          <GamePage />
        // </ProtectedRoute>
        }>
      </Route>
      <Route path="/MyPage" element={
        // <ProtectedRoute>
          <MyPage /> 
        // </ProtectedRoute>
        }>
      </Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Result" element={ <Result /> }></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
    </div>
  );
  
}

export default App;
