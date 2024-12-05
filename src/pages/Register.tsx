import { Amplify } from 'aws-amplify'; 
import * as Layouts from "components/layouts/Index"
import * as Auths from "components/features/auths/Index"
// import { AwsAuthProps } from 'models/Types';
import awsExports from "aws-exports"
import { useUser } from 'UserContext';

Amplify.configure(awsExports);


const Register = () => {

    const {user} = useUser();



    return (
        <div>
            <Layouts.Header />

            {user ?(
                <div>
                <p>ようこそ、{user.username}</p>
                
                </div>
            ) :(
                <p>ログインしてください</p>
            ) }
            <Auths.RegisterForm  />
        </div>
    );
};

export default Register;
