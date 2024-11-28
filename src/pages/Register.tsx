import { Amplify } from 'aws-amplify'; 
// import {Auth} from "aws-amplify"
import * as Layouts from "components/layouts/Index"
import * as Auths from "components/features/auths/Index"
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AwsAuthProps } from 'models/Types';
import awsExports from "aws-exports"
import { useEffect } from 'react';
import { useUser } from 'UserContext';

Amplify.configure(awsExports);


const Register = ({signOut,user}: AwsAuthProps) => {

    console.log("user:"+user);
    return (
        <div>
            {user ?(
                <div>
                <p>ようこそ、{user.username}</p>
                
                <button onClick={signOut}>サインアウト</button>
                </div>
            ) :(
                <p>ログインしてください</p>
            ) }
            <Layouts.Header />
            <Auths.RegisterForm signOut={signOut} user={user} />
        </div>
    );
};

export default withAuthenticator(Register);
