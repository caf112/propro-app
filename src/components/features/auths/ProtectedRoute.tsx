import { ProtectedRouteProps } from 'models/Types';
import { useUser } from 'UserContext';
import { Navigate } from 'react-router-dom';

import { Amplify } from 'aws-amplify'; 
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

import awsExports from "aws-exports"
Amplify.configure(awsExports);

import { AwsAuthProps } from 'models/Types';

const ProtectedRoute = ({ signOut,user}: AwsAuthProps ) => {
  return (
    <div>
      
    </div>
  )
}


// const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//     const {user} = useUser();

//     if (!user || !user.name) {
//         return <Navigate to="/Register" replace></Navigate>
//     }

//   return <>{children} </>;
// }

export default ProtectedRoute