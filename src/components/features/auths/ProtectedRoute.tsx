import { ProtectedRouteProps } from 'models/Types';
import { useUser } from 'UserContext';
import { Link } from 'react-router-dom';
import * as Elements from "components/elements/Index"

import "@aws-amplify/ui-react/styles.css";



const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const {user} = useUser();

    if (!user || !user.username) {
      return (
        <div>
          <Link to="/"><img src="/usa/usa_syun_te.png" alt="header-logo" style={{ width: '200px', height: 'auto' }} /></Link>
          <h1>サインインが必要です</h1>
          <Elements.ChangeButton path="/register" label="サインインする" />
        </div>
      )
    }

  return <>{children} </>;
}

export default ProtectedRoute