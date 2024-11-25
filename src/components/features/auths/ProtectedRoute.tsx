import { ProtectedRouteProps } from 'models/Types';
import { useUser } from 'UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const {user} = useUser();

    if (!user || !user.name) {
        return <Navigate to="/Register" replace></Navigate>
    }

  return <>{children} </>;
}

export default ProtectedRoute