import { ProtectedRouteProps } from 'models/Types';
import { useUser } from 'UserContext';
import { Link, Navigate } from 'react-router-dom';

import { Amplify } from 'aws-amplify'; 
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

import awsExports from "aws-exports"
Amplify.configure(awsExports);


const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const {user} = useUser();

    if (!user || !user.name) {
      return (
        <div>
          <Link to="/"><img src="/usa/usa_syun_te.png" alt="header-logo" style={{ width: '200px', height: 'auto' }} /></Link>
          <h1>サインインが必要です</h1>
          <Link to="/Register" className='button'>新規登録/サインイン</Link>
        </div>
      )
        // return <Navigate to="/Register" replace></Navigate>
    }

  return <>{children} </>;
}

export default ProtectedRoute