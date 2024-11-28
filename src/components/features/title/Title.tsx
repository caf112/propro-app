import { Amplify } from 'aws-amplify'; 
import { AwsAuthProps } from "models/Types";
import { withAuthenticator } from '@aws-amplify/ui-react';

import awsExports from "aws-exports"
import { useUser } from 'UserContext';

Amplify.configure(awsExports);

const Title = () => {
    const {user } = useUser();

    console.log("title.username"+user);
    
    return (
        <div>
            <img src="/usa/usa_niko.png" alt="titleLogo" style={{ width: '300px', height: 'auto' }} />
            {user ? (
                <h1>ようこそ、{user.username}さん</h1>
            ) : (
                <h1>ログインしてください</h1>
            )}
            <p>いっしょにうさぎをいじめよう＾＾</p>
            
        </div>
    );
};

export default Title;