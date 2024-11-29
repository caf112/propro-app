import { ProtectedRouteProps } from 'models/Types';
import { useUser } from 'UserContext';
import { Link } from 'react-router-dom';

import "@aws-amplify/ui-react/styles.css";



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
    }

  return <>{children} </>;
}

export default ProtectedRoute